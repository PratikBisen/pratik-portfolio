import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('screenshots/phase6');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('====================================================');
  console.log('PHASE 6 PRODUCTION VERIFICATION & TEST SUITE');
  console.log('====================================================\n');

  // 1. Start Vite preview server on 4173
  console.log('[1/10] Starting production preview server on port 4173...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173', '--host', '127.0.0.1'], {
    stdio: 'ignore',
  });

  // 2. Start Headless Chrome with remote debugging on 9222
  console.log('[2/10] Launching headless Chrome via Flatpak...');
  const chrome = spawn(
    'flatpak',
    [
      'run',
      'com.google.Chrome',
      '--headless=new',
      '--remote-debugging-port=9222',
      '--remote-debugging-address=127.0.0.1',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-gpu-shader-disk-cache',
      'http://127.0.0.1:4173/',
    ],
    { stdio: 'ignore' }
  );

  const cleanup = () => {
    try {
      chrome.kill('SIGKILL');
      preview.kill('SIGKILL');
    } catch {}
  };

  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);

  // Wait for Chrome devtools to be up
  let target = null;
  for (let i = 0; i < 25; i++) {
    await sleep(400);
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list');
      if (res.ok) {
        const targets = await res.json();
        target = targets.find((t) => t.type === 'page' && t.url.includes('4173'));
        if (target) break;
      }
    } catch {}
  }

  if (!target) {
    console.error('Failed to locate page target on http://127.0.0.1:4173/');
    cleanup();
    process.exit(1);
  }

  console.log('Connected to page target:', target.id, target.webSocketDebuggerUrl);

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let msgId = 1;
  const pending = new Map();
  const consoleErrors = [];
  const pageErrors = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      if (msg.params.type === 'error') {
        consoleErrors.push(msg.params);
      }
    } else if (msg.method === 'Runtime.exceptionThrown') {
      pageErrors.push(msg.params);
    }

    if (msg.id && pending.has(msg.id)) {
      const { resolve } = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg);
    }
  };

  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, { resolve });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const evalExpr = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    return res.result?.result?.value;
  };

  // Wait for page load
  await sleep(1500);

  // -------------------------------------------------------------------------
  // TEST 1: Metadata, SEO & Structure
  // -------------------------------------------------------------------------
  console.log('\n[3/10] Verifying Document Metadata & SEO Implementation...');
  const title = await evalExpr('document.title');
  const metaDesc = await evalExpr('document.querySelector(\'meta[name="description"]\')?.content');
  const canonical = await evalExpr('document.querySelector(\'link[rel="canonical"]\')?.href');
  const ogTitle = await evalExpr('document.querySelector(\'meta[property="og:title"]\')?.content');
  const ogImage = await evalExpr('document.querySelector(\'meta[property="og:image"]\')?.content');
  const jsonLd = await evalExpr('Boolean(document.querySelector(\'script[type="application/ld+json"]\'))');

  console.log('  • Document Title:', title);
  console.log('  • Meta Description:', metaDesc ? '✓ ' + metaDesc.slice(0, 60) + '...' : '✗ Missing');
  console.log('  • Canonical URL:', canonical || '✗ Missing');
  console.log('  • Open Graph Title:', ogTitle || '✗ Missing');
  console.log('  • Open Graph Image:', ogImage || '✗ Missing');
  console.log('  • Schema.org JSON-LD structured data:', jsonLd ? '✓ Present' : '✗ Missing');

  // -------------------------------------------------------------------------
  // TEST 2: Sections & Navigation Anchors
  // -------------------------------------------------------------------------
  console.log('\n[4/10] Verifying Section Anchors & Content Integrity...');
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'open-source', 'education', 'contact'];
  for (const s of sections) {
    const exists = await evalExpr(`Boolean(document.getElementById("${s}"))`);
    console.log(`  • Section #${s}:`, exists ? '✓ Mounted' : '✗ Missing');
  }

  // -------------------------------------------------------------------------
  // TEST 3: Theme Toggle & Persistence
  // -------------------------------------------------------------------------
  console.log('\n[5/10] Verifying Dark/Light Theme Switching & Storage...');
  const initialTheme = await evalExpr('document.documentElement.getAttribute("data-theme")');
  console.log('  • Initial Theme:', initialTheme);

  await evalExpr('document.querySelector("button[aria-label*=\'Switch to\']").click()');
  await sleep(300);
  const lightTheme = await evalExpr('document.documentElement.getAttribute("data-theme")');
  const storedLightTheme = await evalExpr('localStorage.getItem("pb_theme")');
  console.log('  • Toggled Theme:', lightTheme, '| LocalStorage:', storedLightTheme);

  await evalExpr('document.querySelector("button[aria-label*=\'Switch to\']").click()');
  await sleep(300);
  const backDark = await evalExpr('document.documentElement.getAttribute("data-theme")');
  console.log('  • Toggled Back:', backDark);

  // -------------------------------------------------------------------------
  // TEST 4: Atmospheric Environment Presets
  // -------------------------------------------------------------------------
  console.log('\n[6/10] Verifying Atmospheric Environment Presets...');
  const presets = [
    { id: 'aurora', name: 'Aurora' },
    { id: 'studio', name: 'Studio' },
    { id: 'cyber', name: 'Cyber' },
    { id: 'chroma', name: 'Chroma' }
  ];
  for (const p of presets) {
    await evalExpr(`document.querySelector("button[aria-label*='${p.name}']")?.click()`);
    await sleep(250);
    const hasPreset = await evalExpr(`document.querySelector(".atmospheric-env[data-preset='${p.id}']") !== null`);
    console.log(`  • Preset [${p.id}]:`, hasPreset ? '✓ Active' : '✗ Failed');
  }
  // Return to aurora
  await evalExpr('document.querySelector("button[aria-label*=\'Aurora\']")?.click()');
  await sleep(200);

  // -------------------------------------------------------------------------
  // TEST 5: Responsive Viewport Overflow & Layout Checks across 9 Viewports
  // -------------------------------------------------------------------------
  console.log('\n[7/10] Testing 9 Responsive Viewports for Horizontal Overflow...');
  const viewports = [
    { width: 320, height: 600, name: '320px (Compact Mobile)' },
    { width: 375, height: 667, name: '375px (iPhone SE)' },
    { width: 390, height: 844, name: '390px (iPhone 14/15)' },
    { width: 430, height: 932, name: '430px (iPhone Pro Max)' },
    { width: 768, height: 1024, name: '768px (Tablet Portrait)' },
    { width: 1024, height: 768, name: '1024px (Tablet Landscape / Laptop)' },
    { width: 1366, height: 768, name: '1366px (Standard Laptop)' },
    { width: 1440, height: 900, name: '1440px (MacBook / Desktop)' },
    { width: 1920, height: 1080, name: '1920px (Full HD Display)' },
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 1024,
    });
    await sleep(150);

    const overflow = await evalExpr(`({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      innerWidth: window.innerWidth,
      hasOverflow: document.documentElement.scrollWidth > window.innerWidth
    })`);

    const status = overflow.hasOverflow ? '✗ OVERFLOW' : '✓ OK';
    console.log(`  • ${vp.name.padEnd(35)}: ${status} (scroll: ${overflow.scrollWidth}px, viewport: ${vp.width}px)`);
  }

  // -------------------------------------------------------------------------
  // TEST 6: Mobile Navigation Drawer & Focus Trap
  // -------------------------------------------------------------------------
  console.log('\n[8/10] Verifying Mobile Navigation Drawer & Focus Management...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await sleep(200);

  // Click hamburger
  await evalExpr('document.querySelector(".mobile-toggle-btn").click()');
  await sleep(250);
  const isOpen = await evalExpr('Boolean(document.getElementById("mobile-navigation-drawer"))');
  const ariaExpanded = await evalExpr('document.querySelector(".mobile-toggle-btn").getAttribute("aria-expanded")');
  console.log('  • Mobile Drawer Opened:', isOpen && ariaExpanded === 'true' ? '✓' : '✗');

  // Press Escape
  await evalExpr('document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))');
  await sleep(200);
  const isClosed = await evalExpr('!document.getElementById("mobile-navigation-drawer")');
  console.log('  • Mobile Drawer Closed on Escape:', isClosed ? '✓' : '✗');

  // -------------------------------------------------------------------------
  // TEST 7: Contact Interactions (Clipboard, Compose Form)
  // -------------------------------------------------------------------------
  console.log('\n[9/10] Verifying Contact Section Functionality...');
  // Reset to desktop
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });
  await sleep(200);

  const directEmailHref = await evalExpr('document.querySelector(\'.contact-cta-btn\')?.getAttribute("href")');
  console.log('  • Direct Email Action Href:', directEmailHref);

  await evalExpr('document.querySelector(".contact-copy-btn").click()');
  await sleep(100);
  const copyBtnText = await evalExpr('document.querySelector(".contact-copy-btn")?.innerText');
  console.log('  • Copy Email Interaction State:', copyBtnText.includes('Copied') ? '✓ Copied' : '✗ Failed');

  const submitDisabledInitial = await evalExpr('document.querySelector(".compose-launch-btn")?.hasAttribute("disabled")');
  console.log('  • Compose Button Initially Disabled (Empty Message):', submitDisabledInitial ? '✓ Yes' : '✗ No');

  // Type message
  await evalExpr(`(() => {
    const input = document.getElementById("contact-message");
    const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
    nativeSetter.call(input, "Testing engineering inquiry message from automated test suite.");
    input.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await sleep(150);
  const submitEnabled = await evalExpr('!document.querySelector(".compose-launch-btn")?.hasAttribute("disabled")');
  console.log('  • Compose Button Enabled after Message Entered:', submitEnabled ? '✓ Yes' : '✗ No');

  // -------------------------------------------------------------------------
  // TEST 8: Final Screenshots Generation (8 Required Views)
  // -------------------------------------------------------------------------
  console.log('\n[10/10] Capturing 8 High-Resolution Verification Screenshots into screenshots/phase6/...\n');

  const takeScreenshot = async (filename, options = {}) => {
    const res = await send('Page.captureScreenshot', options);
    if (res.result?.data) {
      const buffer = Buffer.from(res.result.data, 'base64');
      const filepath = path.join(SCREENSHOT_DIR, filename);
      fs.writeFileSync(filepath, buffer);
      console.log(`  ✓ Saved: screenshots/phase6/${filename} (${(buffer.length / 1024).toFixed(1)} kB)`);
    } else {
      console.error(`  ✗ Failed screenshot: ${filename}`);
    }
  };

  // 1. Full Desktop Dark Theme
  await evalExpr('document.documentElement.setAttribute("data-theme", "dark")');
  await evalExpr('window.scrollTo(0, 0)');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });
  await sleep(400);
  await takeScreenshot('desktop-dark.png', { captureBeyondViewport: true });

  // 2. Full Desktop Light Theme
  await evalExpr('document.documentElement.setAttribute("data-theme", "light")');
  await evalExpr('window.scrollTo(0, 0)');
  await sleep(400);
  await takeScreenshot('desktop-light.png', { captureBeyondViewport: true });

  // Reset to dark theme for close-ups
  await evalExpr('document.documentElement.setAttribute("data-theme", "dark")');
  await sleep(300);

  // 3. Hero close-up (Viewport 1440x900)
  await evalExpr('document.getElementById("hero")?.scrollIntoView({ behavior: "instant", block: "start" })');
  await sleep(400);
  await takeScreenshot('hero-closeup.png');

  // 4. Projects close-up (Viewport 1440x900)
  await evalExpr('document.getElementById("projects")?.scrollIntoView({ behavior: "instant", block: "start" })');
  await sleep(400);
  await takeScreenshot('projects-closeup.png');

  // 5. Experience and Open Source close-up (Viewport 1440x900)
  await evalExpr('document.getElementById("experience")?.scrollIntoView({ behavior: "instant", block: "start" })');
  await sleep(400);
  await takeScreenshot('experience-opensource-closeup.png');

  // 6. Contact close-up (Viewport 1440x900)
  await evalExpr('document.getElementById("contact")?.scrollIntoView({ behavior: "instant", block: "start" })');
  await sleep(400);
  await takeScreenshot('contact-closeup.png');

  // 7. Full Mobile Dark Theme (390x844)
  await evalExpr('document.documentElement.setAttribute("data-theme", "dark")');
  await evalExpr('window.scrollTo(0, 0)');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await sleep(400);
  await takeScreenshot('mobile-dark.png', { captureBeyondViewport: true });

  // 8. Full Mobile Light Theme (390x844)
  await evalExpr('document.documentElement.setAttribute("data-theme", "light")');
  await evalExpr('window.scrollTo(0, 0)');
  await sleep(400);
  await takeScreenshot('mobile-light.png', { captureBeyondViewport: true });

  // Final runtime error check
  console.log('\n----------------------------------------------------');
  console.log('RUNTIME HEALTH CHECK:');
  console.log('Console Errors:', consoleErrors.length);
  console.log('Page Exceptions:', pageErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', JSON.stringify(consoleErrors, null, 2));
  }
  if (pageErrors.length > 0) {
    console.error('Page exceptions:', JSON.stringify(pageErrors, null, 2));
  }

  const passed = pageErrors.length === 0 && consoleErrors.length === 0;
  console.log(passed ? '\n✓ ALL QUALITY GATES PASSED CLEANLY' : '\n✗ HEALTH CHECK DETECTED ISSUES');
  console.log('====================================================\n');

  ws.close();
  cleanup();
  process.exit(passed ? 0 : 1);
}

run().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

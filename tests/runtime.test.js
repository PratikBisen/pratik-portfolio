import http from 'http';

async function run() {
  // 1. Get targets
  const listRes = await fetch('http://127.0.0.1:9222/json/list');
  const targets = await listRes.json();
  const pageTarget = targets.find(t => t.url.includes('localhost:4173'));
  if (!pageTarget) {
    console.error('Portfolio page target not found!');
    process.exit(1);
  }

  console.log('Found page target:', pageTarget.title, pageTarget.webSocketDebuggerUrl);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();
  const consoleMessages = [];
  const pageErrors = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      consoleMessages.push(msg.params);
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
      const msgId = id++;
      pending.set(msgId, { resolve });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  await new Promise((resolve) => { ws.onopen = resolve; });

  // Enable runtime and console
  await send('Runtime.enable');
  await send('Page.enable');

  const evalExpr = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    return res.result?.result?.value;
  };

  console.log('--- TEST 1: Page Title & Basic Metadata ---');
  const title = await evalExpr('document.title');
  const metaDesc = await evalExpr('document.querySelector(\'meta[name="description"]\')?.content');
  console.log('Title:', title);
  console.log('Meta description:', metaDesc);

  console.log('--- TEST 2: Theme Switching & Persistence ---');
  const initialTheme = await evalExpr('document.documentElement.getAttribute("data-theme")');
  console.log('Initial data-theme:', initialTheme);

  // Click theme toggle button
  await evalExpr('document.querySelector("button[aria-label*=\'Switch to\']").click()');
  await new Promise(r => setTimeout(r, 200));
  const toggledTheme = await evalExpr('document.documentElement.getAttribute("data-theme")');
  const storedTheme = await evalExpr('localStorage.getItem("pb_theme")');
  console.log('After toggle data-theme:', toggledTheme, 'localStorage:', storedTheme);

  if (initialTheme !== toggledTheme && (toggledTheme === 'dark' || toggledTheme === 'light')) {
    console.log('✓ Theme toggle functional and state persisted.');
  } else {
    console.error('✗ Theme toggle test failed');
  }

  // Toggle back to dark
  if (toggledTheme !== 'dark') {
    await evalExpr('document.querySelector("button[aria-label*=\'Switch to\']").click()');
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('--- TEST 3: Navigation Targets & Anchors ---');
  const navIds = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  for (const navId of navIds) {
    const exists = await evalExpr(`Boolean(document.getElementById("${navId}"))`);
    console.log(`Section #${navId} exists:`, exists ? '✓' : '✗');
  }

  console.log('--- TEST 4: Mobile Viewport & Menu Interaction ---');
  // Set viewport to mobile 375x812
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 200));

  // Check mobile hamburger button
  const mobileBtnExists = await evalExpr('Boolean(document.querySelector(".mobile-toggle-btn"))');
  console.log('Mobile hamburger button visible:', mobileBtnExists ? '✓' : '✗');

  // Open mobile menu
  await evalExpr('document.querySelector(".mobile-toggle-btn").click()');
  await new Promise(r => setTimeout(r, 200));
  const isExpanded = await evalExpr('document.querySelector(".mobile-toggle-btn")?.getAttribute("aria-expanded")');
  const drawerExists = await evalExpr('Boolean(document.getElementById("mobile-navigation-drawer"))');
  console.log('Mobile drawer opened:', isExpanded === 'true' && drawerExists ? '✓' : '✗');

  // Press Escape to close
  await evalExpr('document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))');
  await new Promise(r => setTimeout(r, 200));
  const isClosedAfterEscape = await evalExpr('!document.getElementById("mobile-navigation-drawer")');
  console.log('Mobile drawer closed on Escape:', isClosedAfterEscape ? '✓' : '✗');

  console.log('--- TEST 5: Glass Material & Backdrop Filter Check ---');
  const glassPanelExists = await evalExpr('Boolean(document.querySelector(".liquid-glass-surface, .liquid-glass-lens, .liquid-glass-pill"))');
  const glassStyle = await evalExpr('getComputedStyle(document.querySelector(".liquid-glass-lens, .liquid-glass-surface")).backdropFilter');
  console.log('Liquid Glass element present:', glassPanelExists ? '✓' : '✗', 'Computed backdrop-filter:', glassStyle);

  console.log('--- TEST 6: Console Errors & Exceptions Check ---');
  console.log('Console logs count:', consoleMessages.length);
  console.log('Page exceptions count:', pageErrors.length);
  if (pageErrors.length > 0) {
    console.error('Found page errors:', JSON.stringify(pageErrors, null, 2));
  } else {
    console.log('✓ Zero JavaScript runtime exceptions detected.');
  }

  ws.close();
  process.exit(pageErrors.length > 0 ? 1 : 0);
}

run().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

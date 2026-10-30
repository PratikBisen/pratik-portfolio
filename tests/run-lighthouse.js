import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('--- RUNNING LIGHTHOUSE AUDIT ON PRODUCTION BUILD ---');

  // 1. Ensure ports are free
  try {
    execSync('pkill -f "4173" || true; pkill -f "9222" || true');
  } catch {}
  await sleep(1000);

  // 2. Start Vite preview on 4173
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173', '--host', '127.0.0.1'], {
    stdio: 'ignore',
  });

  // 3. Start Flatpak Chrome with debugging port 9222
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

  // Wait for Chrome to be ready
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await sleep(400);
    try {
      const res = await fetch('http://127.0.0.1:9222/json/version');
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {}
  }

  if (!ready) {
    console.error('Chrome failed to start on 9222');
    cleanup();
    process.exit(1);
  }

  console.log('Chrome listening on 9222, launching Lighthouse...');

  const outputPath = path.resolve('docs/lighthouse-report');
  try {
    const cmd = `npx lighthouse http://127.0.0.1:4173/ --port=9222 --output=json,html --output-path=${outputPath} --preset=desktop --only-categories=performance,accessibility,best-practices,seo --skip-audits=uses-http2 --no-enable-error-reporting`;
    console.log('Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });

    const jsonPath = `${outputPath}.report.json`;
    if (fs.existsSync(jsonPath)) {
      const report = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const scores = {
        performance: Math.round(report.categories.performance.score * 100),
        accessibility: Math.round(report.categories.accessibility.score * 100),
        bestPractices: Math.round(report.categories['best-practices'].score * 100),
        seo: Math.round(report.categories.seo.score * 100),
      };

      console.log('\n==========================================');
      console.log('LIGHTHOUSE AUDIT SCORES:');
      console.log(`  • Performance:    ${scores.performance} / 100`);
      console.log(`  • Accessibility:  ${scores.accessibility} / 100`);
      console.log(`  • Best Practices: ${scores.bestPractices} / 100`);
      console.log(`  • SEO:            ${scores.seo} / 100`);
      console.log('==========================================\n');
    }
  } catch (err) {
    console.error('Lighthouse audit failed:', err.message);
  } finally {
    cleanup();
  }
}

run();

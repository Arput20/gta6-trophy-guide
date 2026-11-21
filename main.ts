// GTA VI PS5 Trophy Guide & Tracker - Dossier Builder
// Bundles static web guide assets (app/) and generated screenshots into /output
// and generates dossier.json using the make.fun frontend library.
//
// Usage:
//   node --check main.ts
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const baseDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(`[GTA VI Trophy Guide] Preparing output dossier at: ${outputDir}`);

mkdirSync(outputDir, { recursive: true });

const appSource = join(baseDir, 'app');
const appTarget = join(outputDir, 'app');
if (existsSync(appSource)) {
  cpSync(appSource, appTarget, { recursive: true });
  console.log('[GTA VI Trophy Guide] Copied app/ to output.');
} else {
  console.warn('[GTA VI Trophy Guide] Warning: app/ directory not found!');
}

const screenshotsSource = join(baseDir, 'screenshots');
const screenshotsTarget = join(outputDir, 'screenshots');
mkdirSync(screenshotsTarget, { recursive: true });
if (existsSync(screenshotsSource)) {
  cpSync(screenshotsSource, screenshotsTarget, { recursive: true });
  console.log('[GTA VI Trophy Guide] Copied screenshots/ to output.');
} else {
  console.warn('[GTA VI Trophy Guide] Warning: screenshots/ directory not found!');
}

const dossierPath = join(outputDir, 'dossier.json');
const dossierData = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
});

writeFileSync(dossierPath, dossierData);
console.log(`[GTA VI Trophy Guide] Successfully generated dossier.json (${Buffer.byteLength(dossierData)} bytes).`);

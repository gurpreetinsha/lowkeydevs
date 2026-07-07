import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    {
      name: 'clean-wrangler-cache',
      hooks: {
        'astro:build:start': () => {
          try {
            // Clean local .wrangler except deploy/ config
            const localWrangler = path.join(process.cwd(), '.wrangler');
            if (fs.existsSync(localWrangler)) {
              for (const file of fs.readdirSync(localWrangler)) {
                if (file !== 'deploy') {
                  fs.rmSync(path.join(localWrangler, file), { recursive: true, force: true });
                }
              }
            }
            // Clean global wrangler dirs entirely
            const otherDirs = [
              path.join(os.homedir(), '.wrangler'),
              path.join(os.homedir(), '.config', '.wrangler')
            ];
            for (const d of otherDirs) {
              if (fs.existsSync(d)) {
                fs.rmSync(d, { recursive: true, force: true });
              }
            }
          } catch (e) {
            // Ignore clean errors
          }
        }
      }
    }
  ]
});


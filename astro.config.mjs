import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    {
      name: 'clean-wrangler-cache',
      hooks: {
        'astro:build:start': () => {
          try {
            const dirs = [
              path.join(process.cwd(), '.wrangler'),
              path.join(os.homedir(), '.wrangler'),
              path.join(os.homedir(), '.config', '.wrangler')
            ];
            for (const d of dirs) {
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


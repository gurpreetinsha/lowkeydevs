import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('dev') || process.argv.includes('start');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: isDev ? node({ mode: 'standalone' }) : cloudflare(),
  integrations: [
    {
      name: 'clean-wrangler-cache',
      hooks: {
        'astro:build:start': () => {
          try {
            // Clean local and global wrangler dirs entirely
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


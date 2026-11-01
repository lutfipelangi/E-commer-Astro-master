// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: cloudflare()
});
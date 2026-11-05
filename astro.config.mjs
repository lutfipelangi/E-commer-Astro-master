// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Plugin untuk menghapus meta generator Astro
const removeGenerator = {
  name: 'remove-generator',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          plugins: [
            {
              name: 'remove-generator-tag',
              enforce: 'post',
              transform(code, id) {
                if (id.endsWith('.html')) {
                  return code.replace(/<meta name="generator" content="Astro[^>]*>/, '');
                }
              }
            }
          ]
        }
      })
    }
  }
}

export default defineConfig({
  integrations: [react(), icon(), removeGenerator],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  // Mengubah data-astro-cid-xxx menjadi class="astro-xxx"
  scopedStyleStrategy: 'class',
  
  // TAMBAHKAN BAGIAN INI UNTUK OPTIMASI LCP
  build: {
    inlineStylesheets: 'auto'
  }
});
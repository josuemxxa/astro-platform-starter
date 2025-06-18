import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // ✅ This one belongs here

export default defineConfig({
  site: 'https://josue-blog.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()], // ✅ remove rss() here
  adapter: netlify(),
});

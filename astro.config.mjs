import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

export default defineConfig({
  site: 'https://josue-blog.netlify.app', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), rss()],
  adapter: netlify(),
});

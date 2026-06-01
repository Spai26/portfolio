import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sergioavalos.dev',
  output: 'static',
  build: {
    format: 'file'
  },
  server: {
    port: 3000,
    host: true
  },
  integrations: [
    sitemap(),
    mdx()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
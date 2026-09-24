import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://baileyh-17.github.io',
  publicDir: './image',
  build: { format: 'directory' }
});

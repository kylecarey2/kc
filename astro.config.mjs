// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://kylecarey.com',
  integrations: [react(), mdx(), sitemap()],
  fonts: [
    {
      name: 'Playfair Display',
      cssVariable: '--font-playfair-display',
      provider: fontProviders.google(),
      weights: ['400 900'],
      styles: ['normal', 'italic'],
    },
    {
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif-4',
      provider: fontProviders.google(),
      weights: ['200 900'],
      styles: ['normal', 'italic'],
      options: {
        experimental: {
          variableAxis: {
            opsz: [['8', '60']],
          },
        },
      },
    },
  ],
});

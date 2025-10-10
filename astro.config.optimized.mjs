import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { imageService } from '@astrojs/image';

export default defineConfig({
  site: 'https://carolinarenew.com',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  // Оптимизация изображений
  image: {
    service: imageService({
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      }
    }),
    domains: ['carolinarenew.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.carolinarenew.com'
      }
    ]
  },

  // Оптимизация сборки
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
    split: true
  },

  // Оптимизация Vite
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'utils': ['clsx']
          }
        }
      },
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    ssr: {
      noExternal: ['react-icons']
    }
  },

  // Оптимизация производительности
  experimental: {
    optimizeHoistedScript: true,
    contentCollectionCache: true
  },

  // Компрессия и кеширование
  compressHTML: true,
  
  // Prefetch настройки
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});

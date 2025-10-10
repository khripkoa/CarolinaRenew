import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carolinarenew.com',
  integrations: [
    react({
      experimentalReactChildren: true
    }),
    tailwind({
      applyBaseStyles: false // Уменьшаем CSS
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  // Оптимизация сборки
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
    split: true,
    excludeMiddleware: true
  },

  // Оптимизация Vite
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Разделяем vendor библиотеки
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'react-vendor';
              }
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(css)$/.test(assetInfo.name)) {
              return `assets/css/[name]-[hash].${ext}`;
            }
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash].${ext}`;
            }
            return `assets/[name]-[hash].${ext}`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      },
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2
        },
        mangle: {
          safari10: true
        }
      },
      target: 'es2020',
      cssMinify: 'lightningcss'
    },
    ssr: {
      noExternal: ['react-icons']
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },

  // Экспериментальные оптимизации
  experimental: {
    optimizeHoistedScript: true,
    contentCollectionCache: true
  },

  // Компрессия HTML
  compressHTML: true,
  
  // Prefetch настройки для улучшения навигации
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // Оптимизация для production
  output: 'static',
  adapter: undefined,
  
  // Security headers
  security: {
    checkOrigin: true
  }
});

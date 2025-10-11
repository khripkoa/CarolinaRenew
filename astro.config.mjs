// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// !!! ИМПОРТИРУЕМ ОФИЦИАЛЬНУЮ ИНТЕГРАЦИЮ !!!
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://carolinarenew.com",
  integrations: [
    react(),
    // !!! ДОБАВЛЯЕМ ОФИЦИАЛЬНУЮ ИНТЕГРАЦИЮ !!!
    tailwind({
      // При необходимости, здесь может быть указан путь к tailwind.config.js,
      // но для простого проекта это не требуется
    }),
    sitemap({
      customPages: [
        "https://carolinarenew.com/",
        "https://carolinarenew.com/about",
        "https://carolinarenew.com/services",
        "https://carolinarenew.com/portfolio",
        "https://carolinarenew.com/blog",
        "https://carolinarenew.com/contact",
        "https://carolinarenew.com/local/gastonia",
        "https://carolinarenew.com/local/concord",
        "https://carolinarenew.com/local/matthews",
        "https://carolinarenew.com/local/huntersville",
        "https://carolinarenew.com/local/rock-hill",
        "https://carolinarenew.com/services/interior-painting",
        "https://carolinarenew.com/services/exterior-painting",
        "https://carolinarenew.com/services/kitchen-remodeling",
        "https://carolinarenew.com/services/bathroom-remodeling",
      ],
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    // !!! УДАЛЕНА СЕКЦИЯ plugins: [tailwindcss()] !!!
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("react")) {
                return "react-vendor";
              }
              return "vendor";
            }
          },
        },
      },
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 2,
        },
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
    split: true,
  },

  // Компрессия HTML
  compressHTML: true,

  // Prefetch для улучшения навигации
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});

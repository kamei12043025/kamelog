// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
  },
  // 画像の最適化のためHTTPSホストからのリモート画像のみ許可
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  server: {
    host: true,
    port: 4321,
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/spent-a-lot/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'icons/spent-a-lot.png',
        'icons/money-moving.png',
        'icons/wallet.png',
      ],

      manifest: {
        name: 'Spent-A-Lot',
        short_name: 'Spent-A-Lot',
        description: 'Planilha de gastos, mas não é planilha! ^^',
        theme_color: '#1f2933',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',

        icons: [
          {
            src: '/icons/spent-a-lot.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/spent-a-lot.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/spent-a-lot.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});

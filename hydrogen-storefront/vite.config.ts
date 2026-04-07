import {hydrogen} from '@shopify/hydrogen/vite';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [hydrogen()],
  server: {
    port: 3000,
  },
});

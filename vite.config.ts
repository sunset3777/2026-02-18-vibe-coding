import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || '/', // Controlled by environment variable for dual deployment
  plugins: [react()],
});

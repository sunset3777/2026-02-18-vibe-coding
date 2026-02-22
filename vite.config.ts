import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/2026-02-18-vibe-coding/", // For GitHub Pages deployment
  plugins: [react()],
});

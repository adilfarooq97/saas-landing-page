import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      // Make sure this is an absolute path using path.resolve
      '@': path.resolve(__dirname, './src'),
    },
  },
});
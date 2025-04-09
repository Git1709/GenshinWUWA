import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 4173, // optional, just makes it explicit
    host: true, // needed for Render
    allowedHosts: ['genshinwuwabackend.onrender.com'], // allow your render host
  },
});

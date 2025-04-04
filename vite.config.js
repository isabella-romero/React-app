import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Customize build output directory (optional)
  },
  server: {
    port: 5173, // Customize server port (optional)
  },
});

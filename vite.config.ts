import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/phmarcy-frontendclone/',  // Ensure this matches your GitHub repository name, Add your repository name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp', 'mock-aws-s3', 'aws-sdk', 'nock']
  },
  build: {
    rollupOptions: {
      external: ['@mapbox/node-pre-gyp', 'mock-aws-s3', 'aws-sdk', 'nock']
    }
  }
});

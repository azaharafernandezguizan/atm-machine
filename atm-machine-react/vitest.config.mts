import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['cobertura'],
    },
    environment: 'jsdom',
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
});

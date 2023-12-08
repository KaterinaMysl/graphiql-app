import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Component/',
  plugins: [tsconfigPaths(), react(), svgr()],
  test: {
    coverage: {
      all: true,
      exclude: ['src/tests/**/*', '**/types.ts', '**/*.d.ts', '**/index.ts'],
      include: ['src/**/*'],
      provider: 'v8',
      reporter: ['text'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test.ts'],
  },
});

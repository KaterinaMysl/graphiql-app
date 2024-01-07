import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/React-Component/',
  plugins: [tsconfigPaths(), react(), svgr()],
  envPrefix: 'PIX_',
  assetsInclude: ['**/*.PNG', '**/*.png'],
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

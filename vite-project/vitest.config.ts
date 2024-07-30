import { configDefaults, coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    exclude:[
        ...configDefaults.exclude, 
        'src/main.tsx',
        'e2e-test/**/*',
        'playwright.config.ts',
    ],
    coverage: {
        reporter: ['text', 'lcov'],
        exclude: [...coverageConfigDefaults.exclude, 'src/main.tsx', 'e2e-test/**/*', 'playwright.config.ts'],
    },
    globals: true,
    environment: 'jsdom',
  },
}))
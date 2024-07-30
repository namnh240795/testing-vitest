import { configDefaults, coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    exclude:[
        ...configDefaults.exclude, 
        'src/main.tsx'
    ],
    coverage: {
        reporter: ['text', 'lcov'],
        exclude: [...coverageConfigDefaults.exclude, 'src/main.tsx'],
    },
    globals: true,
    environment: 'jsdom',
  },
}))
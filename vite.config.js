import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from 'postcss'

export default defineConfig({
  base: "/TastyMealsBB/",
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    css: {
      postcss: {
        plugins: [
          postcss.plugin('postcss-cssnano', () => cssnano())
        ]
      }
    }
  },
})

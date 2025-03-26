import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: "/awareness-summer",
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
      ],
    },
  },
})

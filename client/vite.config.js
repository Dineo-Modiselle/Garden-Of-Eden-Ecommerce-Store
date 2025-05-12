import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          100: '#FFE5D9',
          200: '#FFD4C2',
          500: '#FF6B6B',
          700: '#FF4136'
        }
      }
    },
  },










  plugins: [react(), tailwindcss()],
})

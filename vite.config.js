import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change the base URL to match your GitHub Pages repository name
  // If repo is "product-list-react", use: base: '/product-list-react/'
  // If it's your main site, use: base: '/'
  base: '/product-list-react/',
})

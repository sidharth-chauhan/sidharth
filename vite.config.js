import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This must match your repo name perfectly
  base: '/sidharth/', 
})
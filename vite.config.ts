/* eslint-disable indent */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rootListTest/',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
})

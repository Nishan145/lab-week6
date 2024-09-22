// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Ensure this points to the correct directory
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure Vite knows where to find the entry
    },
  },
});

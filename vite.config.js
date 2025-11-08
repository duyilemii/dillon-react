// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // replace 'dillon-react' with your repo name if different
// export default defineConfig({
//   base: '/dillon-react/',
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dillon-react/",
  plugins: [react()],
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/react_sample_deploy/",
//   plugins: [react()]
// })
  

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/react_sample_deploy/",
  plugins: [react()],
})

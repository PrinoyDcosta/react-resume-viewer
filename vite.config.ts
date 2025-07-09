import path, { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-resume-viewer',
      // the proper extensions will be added
      //fileName: 'react-resume-viewer',
      fileName: (format) => `react-resume-viewer.${format}.js`
    },
    rollupOptions: {
        // Externalize dependencies that should not be bundled
        external: ['react', 'react-dom', 'react-dom/client'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-dom/client': 'ReactDOMClient'
          },
        },
      },
  },
  server: {
    port: 8080,
    strictPort: true, 
    hmr: true
  }
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
})
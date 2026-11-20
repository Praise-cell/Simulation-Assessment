import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const replicaDir = path.resolve(__dirname, 'classroom_sorting_replica');
  const distDir = path.resolve(__dirname, 'dist');

  return {
    root: replicaDir,
    publicDir: false as const,
    plugins: [
      react(),
      tailwindcss(),
      // Copies unbundled static runtime files from classroom_sorting_replica into dist/
      // so dynamic scene paths (assets/scene-*.png) and classic script app.js work unchanged.
      {
        name: 'serve-and-copy-classroom-replica',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/styles.css') {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/css; charset=utf-8');
              res.end(fs.readFileSync(path.resolve(replicaDir, 'styles.css')));
              return;
            }
            next();
          });
        },
        closeBundle(error?: Error): void {
          if (error || !fs.existsSync(distDir)) {
            return;
          }
          const appJsSrc = path.resolve(replicaDir, 'app.js');
          if (fs.existsSync(appJsSrc)) {
            fs.copyFileSync(appJsSrc, path.resolve(distDir, 'app.js'));
          }
          const assetsSrc = path.resolve(replicaDir, 'assets');
          const assetsDest = path.resolve(distDir, 'assets');
          if (fs.existsSync(assetsSrc)) {
            fs.cpSync(assetsSrc, assetsDest, {recursive: true, force: true});
          }
        },
      },
    ],
    build: {
      outDir: distDir,
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import {resolve} from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [svgr(), react(), eslint()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                library: resolve(__dirname, 'library.jsx'),
            },
            output: [
                {
                    entryFileNames: 'assets/[name].js',
                    chunkFileNames: 'assets/[name].js',
                    assetFileNames: 'assets/[name][extname]',
                },
            ],
        },
    },
});

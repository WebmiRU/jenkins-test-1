import { defineConfig } from 'vite'

export default defineConfig({
    base: '',
    // base: './',
    server: {
        proxy: {
            '/resource': 'http://127.0.0.1:80',
            '/api': {
                target: 'http://127.0.0.1:80',
                changeOrigin: true,
            },
            '/chat': {
                target: 'http://127.0.0.1:80',
                changeOrigin: true,
            },
        },
    },
})

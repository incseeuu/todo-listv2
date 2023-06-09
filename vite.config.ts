import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/todo-listv2/',
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src"
        }
    },
    server: {
        port: 3000
    }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Kudokuten/', /* 追加 */
  server: {
    // open: '/',  // サーバー起動時にブラウザを開く
    open: false, // ブラウザを自動で開かない
    port: 5173,
    strictPort: true,
  },
  // Vitestの設定
  // test: {
  //   include: ['vitest/**/*.test.jsx'], // テストファイルパス
  //   globals: true,
  //   environment: "jsdom", // JSDOM環境
  //   setupFiles: "./vitest/setup.js", // 初期設定用ファイル
  // }
})

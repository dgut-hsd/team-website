import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// 子路径部署：本站挂在 http://host/team/ 下。
// base 会同时影响：
//   1) 构建产物里的资源 URL（js/css/img 前缀）；
//   2) 运行时的 import.meta.env.BASE_URL（src/base.js 的 ROUTE_BASE 由此而来）。
// 若以后改到根路径或别的子路径，只需改这里 + src/base.js 保持一致。
export default defineConfig({
  plugins: [react()],
  base: '/team/',
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // для сервера, меняет локальный адрес для проверки
  server: {
    proxy: {
      "/api": {
        target: "http://itgirlschool.justmakeit.ru",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from 'vite'
import vue2 from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";
import langJsx from "vite-plugin-lang-jsx";

export default defineConfig({
  plugins: [
    langJsx(),
    vue2(),
    vueJsx()
  ]
})

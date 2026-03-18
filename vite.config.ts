import path from "node:path";
import Vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: "./types/auto-imports.d.ts",
      dirs: ["./src/composables"],
      vueTemplate: true,
    }),
    Components({
      dts: "./types/components.d.ts",
    }),
    UnoCSS(),
    Vue(),
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import mdx from "@mdx-js/rollup";
import UnoCSS from "unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        {
          logo: "i-logos-create-react-app w-2em h-2em transform transition-800 hover:rotate-180",
          headerTitle:
            "text-2xl c-transparent bg-clip-text select-none bg-gradient-to-r from-green-400 to-blue-400",
        },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
    }),
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      dirs: ["./src/components/**"],
    }),
    mdx(),
  ],
});

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://chb3678.github.io',
  base: '/Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});

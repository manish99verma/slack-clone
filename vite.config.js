import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/slack-clone/",
  plugins: [tailwindcss()],
});

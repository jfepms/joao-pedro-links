import { existsSync, readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Preenche o nome no <title> e nas tags de compartilhamento a partir de personal/profile.json.
function siteName(): Plugin {
  const file = "personal/profile.json";
  const name = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")).name as string) : "Seu Nome";
  return {
    name: "site-name",
    transformIndexHtml: (html) => html.replaceAll("%SITE_NAME%", name),
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteName()],
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 3000,
  },
});

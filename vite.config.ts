import { existsSync, readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Preenche o nome no <title> e nas tags de compartilhamento a partir de personal/profile.json.
function siteName(): Plugin {
  const file = "personal/profile.json";
  const name = existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")).name as string) : "Seu Nome";
  // Ícone opcional em personal/favicon.svg substitui o padrão.
  const icon = "personal/favicon.svg";
  const iconHref = existsSync(icon)
    ? `data:image/svg+xml,${encodeURIComponent(readFileSync(icon, "utf8").trim())}`
    : "/favicon.svg";
  return {
    name: "site-name",
    transformIndexHtml: (html) =>
      html.replaceAll("%SITE_NAME%", name).replace('href="/favicon.svg"', `href="${iconHref}"`),
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

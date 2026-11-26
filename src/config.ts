// Dados do site.
//
// O repositório traz só dados de exemplo. Para usar os seus sem publicá-los no Git,
// crie a pasta `personal/` (ignorada pelo Git) na raiz do projeto com:
//   personal/profile.json  → mesmos campos de `example` abaixo (sobrescreve o que definir)
//   personal/foto.png      → sua foto (.png, .jpg ou .webp)
//   personal/Signature.tsx → (opcional) assinatura no rodapé, com `export function Signature()`

export type IconName = "site" | "github" | "instagram" | "linkedin" | "mail";

export interface LinkItem {
  title: string;
  description?: string;
  href: string;
  icon: IconName;
  featured?: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  handle: string;
  /** Endereço público do site (usado no compartilhar). */
  url: string;
  links: LinkItem[];
}

const example: Profile = {
  name: "Seu Nome",
  initials: "SN",
  handle: "@seuusuario",
  url: "https://seusite.com",
  links: [
    { title: "Portfólio", description: "seusite.com", href: "https://seusite.com", icon: "site", featured: true },
    { title: "GitHub", description: "@seuusuario", href: "https://github.com/seuusuario", icon: "github" },
    { title: "Instagram", description: "@seuusuario", href: "https://instagram.com/seuusuario", icon: "instagram" },
  ],
};

const personal = Object.values(
  import.meta.glob<Partial<Profile>>("../personal/profile.json", { eager: true, import: "default" }),
)[0];

const photo = Object.values(
  import.meta.glob<string>("../personal/foto.{png,jpg,jpeg,webp}", { eager: true, query: "?url", import: "default" }),
)[0];

export const profile = { ...example, ...personal, photo: photo ?? "" };
export const links = profile.links;

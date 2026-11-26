<div align="center">

<img src=".github/preview.png" alt="Prévia da página de links" width="100%" />

<h1>Vice Links</h1>

<p>Página de links para a bio, com visual de cartão de identificação em clima de pôr do sol</p>

</div>

---

## Sobre

Página que reúne links (portfólio, GitHub, Instagram e o que mais quiser) em um só lugar, pensada para a bio das redes sociais.

Em vez do visual padrão de lista de botões, o perfil vira um cartão de identificação com degradê de azul, roxo e pêssego, e os links aparecem numerados em estilo editorial.

## Destaques

- **Cartão de identificação** com foto, código de barras gerado a partir do @ e reflexo holográfico
- **Inclinação 3D** do cartão acompanhando o mouse no desktop
- **Links numerados** com preenchimento em degradê ao passar o mouse
- **Faixa animada** com nome e @ rolando no rodapé
- **Botão de compartilhar** que usa o menu nativo do celular ou copia o link no desktop
- **Textura granulada** e brilhos de fundo no estilo pôster
- **Dados pessoais fora do Git**: nome, foto e links ficam numa pasta local ignorada
- **Acessibilidade**: respeita a preferência de reduzir animações do sistema

## Tecnologias

<p>
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## Usando com seus dados

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000` com dados de exemplo. Para usar os seus, crie a pasta `personal/` na raiz (ela é ignorada pelo Git):

```
personal/
├── profile.json    # nome, @, frase e links (mesmos campos de src/config.ts)
├── foto.png        # sua foto (.png, .jpg ou .webp)
└── Signature.tsx   # opcional: assinatura no rodapé
```

Exemplo de `profile.json`:

```json
{
  "name": "Seu Nome",
  "initials": "SN",
  "handle": "@seuusuario",
  "url": "https://seusite.com",
  "links": [
    { "title": "Portfólio", "description": "seusite.com", "href": "https://seusite.com", "icon": "site", "featured": true },
    { "title": "Instagram", "description": "@seuusuario", "href": "https://instagram.com/seuusuario", "icon": "instagram" }
  ]
}
```

Como a pasta não vai para o Git, publique pela CLI da Vercel a partir da sua máquina (o `.vercelignore` garante que `personal/` seja enviada no deploy):

```bash
npx vercel --prod
```

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).

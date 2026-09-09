# Revom Studio Detail — Site Institucional

Site institucional premium para a Revom Studio Detail (estética automotiva em Itapevi/SP), construído em React + TypeScript + Vite + Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Editando o conteúdo

Todo o conteúdo textual, contatos, links de WhatsApp e imagens está centralizado em:

```
src/content/site.ts
```

Edite esse arquivo para atualizar telefone, endereço, Instagram, textos dos serviços, certificações, depoimentos e imagens — sem precisar mexer nos componentes.

### Substituindo imagens

As imagens atuais são placeholders (Unsplash) indicados no próprio `site.ts`. Para usar fotos reais da Revom:

1. Coloque os arquivos em `public/images/`.
2. Troque as URLs em `src/content/site.ts` (objeto `images`) pelo caminho local, ex: `/images/hero.jpg`.

### Substituindo a logo

O componente `src/components/Logo.tsx` reproduz a identidade em texto (REVOM / STUDIO DETAIL). Quando o arquivo oficial da logo (SVG/PNG) estiver disponível, basta importá-lo ali no lugar do texto.

## Estrutura

- `src/components/` — uma seção por arquivo (Header, Hero, Manifesto, Services, Gallery, Founder, Testimonials, InstagramFeed, Location, FinalCta, Footer).
- `src/content/site.ts` — fonte única de dados do site.
- `src/hooks/useReveal.ts` — hook de fade-in ao rolar a página.

## Escopo

Este projeto é exclusivamente o site institucional/apresentativo. Não inclui CRM, painel administrativo, cadastro de clientes/veículos ou qualquer área interna.

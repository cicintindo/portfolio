---
name: Portfólio Cintia Kamei
description: Portfólio pessoal rosa pastel com toque artesanal — 2º semestre de ADS no IFSP
colors:
  primary: "#a63a78"
  primary-med: "#f7aef8"
  rose-tint: "#fff0f3"
  border-rose: "#ffe3e8"
  text: "#454049"
  text-soft: "#6f6875"
  neutral-bg: "#fdfbfc"
  white: "#ffffff"
  scrim: "rgba(90,30,60,0.38)"
  form-ok-bg: "#eaf7ef"
  form-ok-border: "#bfe6cf"
  form-ok-text: "#2e7d4f"
  form-err-bg: "#fdeeee"
  form-err-border: "#f5c6c6"
  form-err-text: "#b34a4a"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1rem, 1.8vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, monospace"
    fontWeight: 500
rounded:
  sm: "14px"
  md: "22px"
  lg: "28px"
  pill: "40px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "28px 34px"
  tag:
    backgroundColor: "{colors.rose-tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  input:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 18px"
---

# Design System: Portfólio Cintia Kamei

## Overview

**Creative North Star: "O Jardim de Sakura"**

Um jardim de cerejeiras em flor: acolhedor, artesanal e delicadamente feminino, mas com raiz técnica. A identidade combina um rosa pastel caloroso com tipografia Poppins clara e detalhes em DM Mono (a letra "de código"). Os cards flutuam sobre fundos pastel com sombras suaves — nada de bordas duras — e pétalas de sakura caem suavemente no hero.

O sistema equilibra calor pessoal com clareza profissional: textos são legíveis (contraste AA) em todos os fundos, e o tom é honesto e de estudante em progresso, não de empresa SaaS genérica.

**Key Characteristics:**
- Paleta rosa pastel (claro, médio e um primário escuro o suficiente para contraste AA)
- Profundidade por sombra suave, nunca por borda
- Tipo em três vozes: Newsreader (serif editorial) nos títulos, Poppins no corpo, DM Mono nos rótulos
- Cantos generosamente arredondados (14–28px), pílulas para controles pequenos
- Motivo decorativo de flores de cerejeira, com humor e toque pessoal

## Colors

Rosa pastel e off-white: a paleta sente-se como papel de seda e flor de cerejeira, com um primário profundo para o texto e ações terem contraste.

### Primary
- **Rosa Framboesa Profunda** (#a63a78): o primário. Usado em texto de destaque/accent, botões, títulos de seção e ícones. Escurecido propositalmente para cumprir WCAG AA (4.5:1) sobre fundos claros.
- **Rosa Silvestre** (#f7aef8): médio decorativo. Usado em gradientes, brilhos e pétalas. Nunca como cor de texto (contraste insuficiente).

### Neutral
- **Tinta Suave** (#6f6875): texto secundário/corpo, com contraste ≥4.5:1 sobre fundo claro.
- **Tinta** (#454049): texto principal, quase preto-acinzentado.
- **Papel** (#fdfbfc / #ffffff): fundos da página e dos cards.
- **Papel Rosado** (#fff0f3): fundo pastel de seções alternadas e chips.
- **Borda Rosa Antiga** (#ffe3e8): linhas e bordas sutis.
- **Cortina** (rgba(90,30,60,0.38)): overlay quente sob o drawer do menu mobile.
- **Estado do Formulário**: sucesso (`#eaf7ef`/`#bfe6cf`/`#2e7d4f`) e erro (`#fdeeee`/`#f5c6c6`/`#b34a4a`) para fundo/borda/texto.

### Named Rules
**A Regra da Raridade.** O rosa primário profundo é o único tom "forte"; é escasso. Cabe a ele dar contraste a ações e destaques, enquanto os rosa claros preenchem o fundo. Se algo precisa chamar atenção, usa o primário; nunca dois tons fortes em disputa.

## Typography

**Display Font:** Newsreader (serif editorial — Google Fonts, opsz 6..72, com fallback Georgia)
**Body Font:** Poppins
**Label/Mono Font:** DM Mono (monospace)

**Character:** Três vozes com papéis fixos — Newsreader (serif editorial com optical sizing, calorosa e não-saturada) para títulos e displays, Poppins para o corpo de leitura e DM Mono para etiquetas técnicas curtas. O padrão "serif display + sans body + mono labels" (Hyperstudio, Jigar Joshi, Celeste Duffy) é o que faz o site parecer feito por alguém com direção, não por um template de uma família só. Nota: Fraunces foi descartada — entrou na onda de fontes "saturadas por IA".

### Hierarchy
- **Display** (Newsreader 600, clamp(2rem,5vw,3.4rem), 1.12, tracking -0.015em): títulos de seção e hero; o destaque vem do itálico Newsreader + rosa primário (`.accent`).
- **Title** (Newsreader 600, 1.25–1.45rem): títulos de card, destinos de viagem, nomes de projeto.
- **Body** (Poppins 400, clamp(1rem,1.8vw,1.2rem), 1.7): parágrafos. Comprimento máximo ~46rem.
- **Label** (DM Mono 500, 0.72–0.8rem, uppercase, letter-spacing 0.1–0.18em): kickers de seção, badges, tags, datapoints, datas.

### Named Rules
**A Regra do Monospace Reservado.** DM Mono é só para dados e rótulos curtos — nunca para parágrafos longos. Ele deve parecer "nota de engenharia" pontual, não o tom da leitura.
**A Regra do Serif de Vitrine.** Newsreader é só para titles e displays — nunca para corpo longo. Se um texto vira parágrafo, ele volta para Poppins.
**A Regra do Sem-Saturação.** Fontes "das bombas de IA" (Fraunces, Satoshi, General Sans, Clash Display, Inter puro) estão banidas; só faces com identidade própria entram.

## Layout

Container central de até 1200px com padding lateral de 24px. Hero editorial alinhado à esquerda (meta mono, display serif grande, corpo à esquerda). Seções empilham com padding generoso (`clamp(6rem,12vw,9rem)`). Grids variados e propositalmente assimétricos — nunca o mesmo módulo idêntico repetido: about 2 colunas, formação 2 colunas com card-destaque em largura total, projetos 2 colunas, hobbies 3 colunas, viagens 2 colunas com rotação orgânica. Em ≤992px tudo colapsa para 1 coluna; viagens vira 1 em ≤576px. Nav fixa com menu hambúrguer (drawer lateral direito) em ≤992px.

Acentua-se mais espaço acima de um título do que abaixo — cada seção respira.

## Elevation & Depth

Profundidade é transmitida **exclusivamente por sombra suave**: um halo difuso e rosado (`box-shadow: 0 18px 40px rgba(150,66,120,0.14)`) projeta os cards brancos sobre os fundos pastel. Sem bordas duras nos cards, sem sombras de deslocamento duro. No hover, a sombra cresce (`0 26px 55px rgba(...0.24)`) e o card sobe 8px.

### Shadow Vocabulary
- **Elevação de Card** (`0 18px 40px rgba(150,66,120,0.14)`): todos os cards em repouso.
- **Elevação de Hover** (`0 26px 55px rgba(150,66,120,0.24)`): estado ativo, junto com `translateY(-8px)`.

### Named Rules
**A Regra do Sem-Borda.** Cards nunca combinam borda de 1px com sombra difusa — é o "ghost card" tipicamente gerado por IA. Escolhe-se uma: esta identidade escolhe a sombra.

## Shapes

Cantos generosamente arredondados em toda parte: 14px para botões, inputs e fotos dos postais de viagem; 22px para cards de contato e azulejos de ícone; 28px para cards principais (inclusive os postais de viagem); pílulas (40px) para tags, chips, badges e botão ENTRAR do splash.

## Components

### Buttons
- **Shape:** cantos arredondados 14px.
- **Primary:** rosa profundo chapado (`#a63a78`, sem gradiente), texto branco, padding 16px 32px. Hover: rosa-hover e sobe 3px. Gradiente bicolor em botão é tell de template — proibido.
- **Outline:** transparente com borda de 2px rosa profundo, texto rosa profundo. Hover: fundo rosa profundo, texto branco.
- **Splash "ENTRAR":** pílula, borda 1.5px rosa, texto rosa, aparece após a animação.

### Tags / Chips
- **Style:** pílula, fundo `rose-tint`, texto rosa profundo, borda `border-rose`, fonte DM Mono, min 12px.
- **State:** usadas para listar tecnologias e datas; não são interativas individualmente.

### Cards / Containers
- **Corner Style:** 28px (14–22px nos menores).
- **Background:** branco.
- **Shadow Strategy:** sombra difusa rosada (ver Elevation), sem borda.
- **Internal Padding:** 28px 34px (maior nos cards em destaque, ~34px).

### Inputs / Fields
- **Style:** branco, borda 1.5px `border-rose`, cantos 14px, padding 16px 18px, Poppins.
- **Focus:** borda rosa médio + anel de foco rosado translúcido (`0 0 0 4px rgba(247,174,248,0.2)`).
- **Error:** por campo — input com borda/texto `form-err-*` e mensagem inline monoespaçada abaixo (`aria-invalid` + `aria-describedby`). Mensagem geral em caixa clara com texto vermelho-rosado.
- **Formulário real:** conectado à Formspree (`https://formspree.io/f/mkjnrneq`) via `fetch`/AJAX com mensagens inline de sucesso/erro; campos enviados: `nome`, `email`, `mensagem`, `_subject`, honeypot `_gotcha`. Sem nota de demo.

## Viagens — Postais em rosa

A seção de viagens é "o refúgio" dentro do jardim, mas **dentro do sistema** — nada de segunda paleta nem de fonte extra. Banner com rosa profundo chapado, sakura SVG traçada a branco girando lentamente (30s; desliga em `prefers-reduced-motion`), e cards "postais" grandes (grade 2 colunas, foto 4:5 com canto 14px) com leve rotação orgânica (`--rot`) que se retifica no hover. Título de destino em Newsreader; legenda e datapoint em DM Mono rosa. Sem emoji, sem gradientes fora do rosa.

## Impressão & Materialidade (anti-template)

Padrões extraídos de 50+ portfólios de referência (Awwwards/FWA/Muzli 2025–26) para o site não parecer "gerado por IA":
- **Grão de papel:** overlay fixo de ruído (feTurbulence) a ~4% sobre a página inteira — tira a lisura digital de template.
- **Ícones vetoriais, nunca emoji:** todos os ícones (projetos, hobbies, contato) e a favicon são SVG; emoji decorativo (🌸 ✉ ◎ …) é cartão de visita de IA.
- **Botões chapados:** cor sólida, sem gradiente bicolor e sem "brilho" de Web 2.0.
- **Herói editorial à esquerda:** display serif grande com meta mono; nada de "Hi, I'm X 🚀" central e perfeitamente simétrico.
- **Reveal seletivo:** só títulos, cards e destaques animam no scroll — não todo elemento da página.
- **Copy em 1ª pessoa, específica e com opinião:** fatos concretos e preferências declaradas, não slogan genérico.

### Navigation
- **Desktop:** 5 destinos — Sobre, Formação, Projetos, Competências + CTA "Contato". Links Poppins 500 com sublinhado que anima em `scaleX`. O resto da página (Experiências, Hobbies, Viagens) é descoberto por rolagem; a nav não compete com a seção em foco.
- **Mobile (≤992px):** menu hambúrguer (alvo ≥44px) abre drawer lateral direito (máx 340px/86vw) de fundo branco quase-opaco, com links grandes centralizados. Overlay escurecido clicável atrás fecha o menu ao tocar fora. `aria-expanded` reflete o estado.

### Skills
- Dois grupos rotulados em DM Mono — **Técnicas** (HTML5 & CSS3, Bootstrap 5, Lógica de Programação, Git & GitHub) e **Comportamentais** (Aprendizado Rápido, Resolução de Problemas, Organização & Métodos, Raciocínio Lógico). Chips não são interativos; sem affordance de clique.

## Do's and Don'ts

### Do:
- **Do** usar o rosa primário profundo (#a63a78) para qualquer texto/ação que precise passar no contraste AA.
- **Do** separar elevação por sombra suave — os cards brancos flutuam sobre fundos pastel.
- **Do** reservar DM Mono para dados, badges e rótulos técnicos curtos.
- **Do** usar Newsreader em títulos e displays de todo o site (uma voz só, coerente) — nunca em parágrafos.
- **Do** usar SVG (stroke/fill rosa) para ícones — nunca emoji ou caracteres unicode decorativos.
- **Do** preferir cor chapada a gradiente bicolor em botões e banners.
- **Do** dar bastante espaço vertical entre seções e mais espaço acima dos títulos do que abaixo.
- **Do** preservar o tom honesto de estudante em progresso e os fatos reais do conteúdo.

### Don't:
- **Don't** usar borda de 1px em cards que já têm sombra (ghost card).
- **Don't** usar os rosa claros (médio/claro) como cor de texto — só o primário profundo.
- **Don't** aplicar letter-spacing largo (>0.06em) a parágrafos de corpo; só a rótulos uppercase curtos.
- **Don't** usar emoji (🌸 ✉ ◎ ⌘ ♪ …) como ícone — vetorial ou nada.
- **Don't** usar gradiente bicolor (rosa→rosa-hover, terracota, pôr do sol) em botões/banners — rosa chapado.
- **Don't** animar tudo no scroll: 2–3 elementos-chave por seção bastam.
- **Don't** abandonar o suporte a `prefers-reduced-motion`, que já existe.

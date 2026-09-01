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
  areia: "#f6e6d3"
  areia-clara: "#fcf3e7"
  sol: "#f3a94e"
  terracota: "#a34a22"
  sunset-deep: "#8e3118"
  sunset-mid: "#a84620"
  sunset-light: "#b14f26"
  travel-text: "#fff7ec"
  travel-card-bg: "#fffdf8"
  sol-glow: "rgba(255,224,178,0.35)"
  sunset-shade: "rgba(54,18,8,0.25)"
  travel-shadow: "rgba(163,74,34,0.16)"
  travel-shadow-hover: "rgba(163,74,34,0.22)"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1rem, 1.8vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Mono, monospace"
    fontWeight: 500
  accentSerif:
    fontFamily: "Playfair Display, serif"
    note: "Edição exclusiva da seção Litoral (vitrine editorial); nunca para corpo."
rounded:
  sm: "14px"
  md: "22px"
  lg: "28px"
  pill: "40px"
  photo: "18px"
  travel: "26px"
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
- Tipo Poppins para leitura + DM Mono para rótulos técnicos
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
- **Litoral (seção Viagens)**: segundo motivo autorizado e escasso — areia e areia-clara para o fundo da seção, terracota/sol e os stops de pôr do sol (`sunset-deep→mid→light`) para o banner de refúgio, com texto `#fff7ec` (AA ≥4.5). Valores orbitais (brilhos, sombras da sombra) em `sol-glow`, `sunset-shade`, `travel-shadow*`.

### Named Rules
**A Regra da Raridade.** O rosa primário profundo é o único tom "forte"; é escasso. Cabe a ele dar contraste a ações e destaques, enquanto os rosa claros preenchem o fundo. Se algo precisa chamar atenção, usa o primário; nunca dois tons fortes em disputa.

## Typography

**Display Font:** Poppins (com fallback sans-serif genérico)
**Body Font:** Poppins
**Label/Mono Font:** DM Mono (monospace)

**Character:** Contraste deliberado entre o Poppins (geométrico e amigável, peso 300–700) para ler e o DM Mono (técnico, de código) para etiquetas de seção, badges e datapoints — sinalizando "pessoa de tecnologia com toque pessoal" sem virar cartaz.

### Hierarchy
- **Display** (Poppins 700, clamp(2rem,5vw,3.4rem), 1.12): títulos de seção. Convertidos em itálico + rosa primário para o destaque.
- **Title** (Poppins 600, 1.25–1.35rem): títulos de card, nomes, itens.
- **Body** (Poppins 400, clamp(1rem,1.8vw,1.2rem), 1.7): parágrafos. Comprimento máximo ~46rem.
- **Label** (DM Mono 500, 0.72–0.8rem, uppercase, letter-spacing 0.1–0.16em): kickers de seção, badges, tags, datapoints, datas.

### Named Rules
**A Regra do Monospace Reservado.** DM Mono é só para dados e rótulos curtos — nunca para parágrafos longos. Ele deve parecer "nota de engenharia" pontual, não o tom da leitura.

## Layout

Container central de até 1200px com padding lateral de 24px. Seções empilham verticalmente com padding generoso (`clamp(6rem,12vw,9rem)`), separando enormemente umas das outras. Grids principais: 2 colunas (about, projetos, viagens), 3 colunas (formação, hobbies). Em ≤992px, grids colapsam para 1 coluna; viagens mantém 2 colunas e em ≤576px vira 1. Nav fixa com menu hambúrguer (drawer lateral direito) em ≤992px.

Acentua-se mais espaço acima de um título do que abaixo — cada seção respira.

## Elevation & Depth

Profundidade é transmitida **exclusivamente por sombra suave**: um halo difuso e rosado (`box-shadow: 0 18px 40px rgba(150,66,120,0.14)`) projeta os cards brancos sobre os fundos pastel. Sem bordas duras nos cards, sem sombras de deslocamento duro. No hover, a sombra cresce (`0 26px 55px rgba(...0.24)`) e o card sobe 8px.

### Shadow Vocabulary
- **Elevação de Card** (`0 18px 40px rgba(150,66,120,0.14)`): todos os cards em repouso.
- **Elevação de Hover** (`0 26px 55px rgba(150,66,120,0.24)`): estado ativo, junto com `translateY(-8px)`.

### Named Rules
**A Regra do Sem-Borda.** Cards nunca combinam borda de 1px com sombra difusa — é o "ghost card" tipicamente gerado por IA. Escolhe-se uma: esta identidade escolhe a sombra.

## Shapes

Cantos generosamente arredondados em toda parte: 14px para botões e inputs, 18/26px para a vitrine de viagens (foto/card), 22px para cards de contato, 28px para cards principais, e pílulas (40px) para tags, chips, badges e botão de entrada do splash. Ícones de hobby são azulejos redondos alinhados lado a lado com o título.

## Components

### Buttons
- **Shape:** cantos arredondados 14px.
- **Primary:** gradiente rosa profundo → rosa escuro, texto branco, padding 16px 32px. Sombra rosada. Hover: sobe 3px e a sombra intensifica.
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
- **Nota de honestidade:** o site é estático; o formulário é demo. A mensagem de sucesso diz isso e aponta para e-mail/Instagram reais.

## Litoral — Refúgio Costeiro (seção Viagens)

A seção de viagens é um segundo motivo deliberado dentro do jardim: o entardecer na praia. Fundo arenoso quente (`areia`/`areia-clara`), terracota e sol — restritos a esta seção — para acolher o visitante como um convite ("fica à vontade"). O banner usa o gradiente de pôr do sol com um sol SVG traçado (`currentColor`) que gira lentamente (30s) e desliga sob `prefers-reduced-motion`. Os cards são maiores que o padrão (grade 2 colunas, `rounded.travel` 26px, foto 4:5 com `rounded.photo` 18px e véu quente translúcido), com leve rotação orgânica por card (`--rot`) que se retifica no hover, e título de destino em **Playfair Display** (serif) como nota editorial — a única ocorrência de serif no sistema, reservada a essa vitrine. Texto sempre AA sobre o gradiente (`#fff7ec` sobre os stops mais escuros).

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
- **Do** dar bastante espaço vertical entre seções e mais espaço acima dos títulos do que abaixo.
- **Do** preservar o tom honesto de estudante em progresso e os fatos reais do conteúdo.

### Don't:
- **Don't** usar borda de 1px em cards que já têm sombra (ghost card).
- **Don't** usar os rosa claros (médio/claro) como cor de texto — só o primário profundo.
- **Don't** aplicar letter-spacing largo (>0.06em) a parágrafos de corpo; só a rótulos uppercase curtos.
- **Don't** usar os rosa claros como cor de texto — só o primário profundo.
- **Don't** abandonar o suporte a `prefers-reduced-motion`, que já existe.

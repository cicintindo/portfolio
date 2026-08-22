# Cards Prontos para o Trello

Board: https://trello.com/b/lRmxaCj5/portfolio-pessoal

Como usar: copie o **título** de cada card e cole no campo de título do Trello; copie o **corpo** e cole na descrição. Crie as etiquetas `Must have`, `Should have`, `Could have` e `Won't have now` (cores sugeridas: vermelho, amarelo, verde e cinza) e aplique a correspondente. Depois mova os cards para a coluna correta (`Done` para os concluídos, `Backlog`/`To Do` para BL16).

Sugestão: exclua o card "Cadastrar dados pessoais" (fala de CRUD/banco de dados, fora do escopo deste projeto estático) e arquive a lista "Guia de introdução ao Trello".

---

## BL01 – Criar estrutura HTML5 semântica e vincular Bootstrap 5

- **História relacionada:** US07
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - O arquivo `index.html` utiliza tags semânticas (`nav`, `section`, `main`, `footer`).
  - Bootstrap 5 vinculado via CDN e meta tag de viewport presente.
  - A página abre sem erros no console do navegador.
- **Status:** Concluído (Done)

---

## BL02 – Implementar seção de apresentação com nome, foto e curso

- **História relacionada:** US01
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Nome completo, badge com curso/semestre (ADS · IFSP) e texto de apresentação visíveis.
  - Foto de perfil exibida em moldura circular; se ausente, avatar com iniciais é exibido automaticamente.
- **Status:** Concluído (Done)

---

## BL03 – Criar hero em tela cheia com imagem de fundo e botões de ação

- **História relacionada:** US01
- **Prioridade MoSCoW:** Could have
- **Critérios de aceitação:**
  - O topo ocupa toda a altura da janela (`min-height: 100vh`) com imagem `assets/banner.jpg`.
  - Botões "Ver projetos" e "Fale comigo" rolam suavemente até as seções corretas.
- **Status:** Concluído (Done)

---

## BL04 – Construir cards da formação acadêmica

- **História relacionada:** US02
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Três cards: ADS (IFSP), Técnico em Administração e Engenharia Ambiental.
  - Cada card tem título, status e descrição, organizados em grid responsivo.
- **Status:** Concluído (Done)

---

## BL05 – Criar painel de competências em pílulas

- **História relacionada:** US03
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Oito pílulas com ícone SVG e rótulo (hard e soft skills).
  - Grid adaptável: 4 colunas no desktop, 2 no mobile.
- **Status:** Concluído (Done)

---

## BL06 – Implementar listagem de projetos com links válidos

- **História relacionada:** US04
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Cada projeto possui título, descrição e badges das tecnologias.
  - Nenhum link morto: botão aponta para repositório real ou aparece como rótulo de status não clicável.
- **Status:** Concluído (Done)

---

## BL07 – Montar blocos de experiências relevantes

- **História relacionada:** US02
- **Prioridade MoSCoW:** Should have
- **Critérios de aceitação:**
  - Dois cards (práticas acadêmicas IFSP e vivência administrativa) com período/origem e descrição.
- **Status:** Concluído (Done)

---

## BL08 – Criar cards de hobbies e lazer

- **História relacionada:** US05
- **Prioridade MoSCoW:** Should have
- **Critérios de aceitação:**
  - Três cards (Música, Snow, Quebra-cabeças) com ícone centralizado e descrição.
- **Status:** Concluído (Done)

---

## BL09 – Criar card de viagens realizadas

- **História relacionada:** US05
- **Prioridade MoSCoW:** Should have
- **Critérios de aceitação:**
  - Card com ícone, título "Refúgio no Litoral" e texto descritivo.
- **Status:** Concluído (Done)

---

## BL10 – Desenvolver formulário de contato com validação em JavaScript

- **História relacionada:** US06
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Campos Nome, E-mail e Mensagem obrigatórios.
  - Envio com campo vazio ou e-mail inválido exibe mensagem de erro inline.
  - Dados válidos exibem confirmação de sucesso na própria página (sem `alert`).
- **Status:** Concluído (Done)

---

## BL11 – Implementar menu responsivo com rolagem suave

- **História relacionada:** US07
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Menu colapsa em botão hambúrguer abaixo de 992px e fecha ao clicar em um link.
  - Âncoras rolam suavemente e não ficam escondidas sob o menu fixo.
- **Status:** Concluído (Done)

---

## BL12 – Adicionar destaque automático da seção ativa no menu (scrollspy)

- **História relacionada:** US08
- **Prioridade MoSCoW:** Should have
- **Critérios de aceitação:**
  - O link do menu correspondente à seção visível recebe destaque visual durante a rolagem.
- **Status:** Concluído (Done)

---

## BL13 – Adicionar botão flutuante "voltar ao topo"

- **História relacionada:** US08
- **Prioridade MoSCoW:** Should have
- **Critérios de aceitação:**
  - Botão aparece após ~400px de rolagem e retorna ao início da página suavemente.
- **Status:** Concluído (Done)

---

## BL14 – Substituir emojis por ícones SVG profissionais

- **História relacionada:** US08
- **Prioridade MoSCoW:** Could have
- **Critérios de aceitação:**
  - Nenhum emoji no corpo da página; apenas o favicon mantém um caractere decorativo.
  - Ícones são SVG inline, sem bibliotecas externas além do Bootstrap.
- **Status:** Concluído (Done)

---

## BL15 – Publicar o portfólio no GitHub Pages

- **História relacionada:** US07
- **Prioridade MoSCoW:** Must have
- **Critérios de aceitação:**
  - Repositório sincronizado com a versão final do código.
  - Página acessível publicamente em https://cicintindo.github.io/portfolio/
- **Status:** Concluído (Done) — página pública ativa em https://cicintindo.github.io/portfolio/

---

## BL16 – Enviar mensagens do formulário por servidor/e-mail

- **História relacionada:** US06
- **Prioridade MoSCoW:** Won't have now
- **Critérios de aceitação:**
  - Integração com serviço de e-mail ou backend para entrega real das mensagens.
  - Fora do escopo desta entrega: o projeto deve ser exclusivamente HTML/CSS/JS estático.
- **Status:** Não iniciado (Backlog)

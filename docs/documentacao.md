# Documentação do Projeto — Portfólio Pessoal Cintia Kamei

> 1ª Entrega — Planejamento e Implementação de um Portfólio Pessoal
> Desenvolvimento orientado por requisitos com uso de Inteligência Artificial como apoio.

---

## 1. Definição do Projeto

* **Nome do projeto:** Portfólio Pessoal Interativo — Cintia Kamei
* **Problema/necessidade atendida:** falta de um local centralizado, acessível e profissional para apresentar perfil acadêmico, competências, histórico educacional, projetos e interesses pessoais a professores, colegas e recrutadores.
* **Objetivo principal:** apresentar minha trajetória como estudante de Análise e Desenvolvimento de Sistemas (IFSP) em uma página única, clara, responsiva e funcional, transformando requisitos planejados em uma aplicação real.
* **Público-alvo:** recrutadores de TI, professores e colegas do IFSP e conexões profissionais.
* **Proposta visual:** tema minimalista em tons pastéis (rosa/lilás), tipografia Poppins, hero em tela cheia com imagem de fundo suave, cards arredondados com sombras leves, ícones vetoriais SVG e muito espaço em branco entre seções.
* **Conteúdo apresentado:**
  1. Identificação e apresentação pessoal (hero com foto)
  2. Formação Acadêmica
  3. Conhecimentos e Competências
  4. Projetos Realizados ou em Desenvolvimento
  5. Experiências Relevantes
  6. Hobbies e Lazer
  7. Viagens Realizadas
  8. Formas de Contato
* **Principais funcionalidades:** navegação fixa responsiva com rolagem suave; destaque automático da seção ativa no menu (scrollspy); animações de entrada ao rolar; botão flutuante "voltar ao topo"; formulário de contato com validação inline; fallback automático da foto de perfil; ícones SVG inline.
* **Tecnologias utilizadas:** HTML5 semântico, CSS3 customizado (variáveis CSS e `clamp()`), JavaScript ES6 puro e Bootstrap 5 (via CDN) — único framework, conforme restrição da atividade. Ícones em SVG embutido no HTML e fonte Google Fonts (Poppins).

---

## 2. Prompts Utilizados

Os prompts abaixo tiveram influência relevante no planejamento e na implementação.

### Prompt 01 — Estrutura inicial e histórias de usuário

| Item | Registro |
| :--- | :--- |
| **Objetivo** | Definir as histórias de usuário e a estrutura HTML das 8 seções exigidas. |
| **Texto enviado à IA** | *"Crie histórias de usuário no formato padrão para um portfólio pessoal responsivo com HTML, CSS, JS e Bootstrap 5"* / *"Gere um código HTML5 responsivo utilizando Bootstrap 5 com as seções: Apresentação, Formação, Competências, Projetos, Experiências, Hobbies, Viagens e Contato."* |
| **Resultado obtido** | Estrutura funcional e histórias bem formatadas, porém com estilo padrão do Bootstrap (azul/cinza) e critérios genéricos. |
| **Análise crítica** | Critérios como "a página deve ficar agradável" não são verificáveis. O layout padrão não refletia identidade pessoal alguma. |
| **Decisão tomada** | Reescrevi os critérios em formato objetivo (presença de campos, comportamentos verificáveis) e criei classes CSS próprias (`card-custom`, `badge-pink` etc.) para aplicar o tema rosa pastel sobre o grid do Bootstrap. |

### Prompt 02 — Aprimoramento geral do site

| Item | Registro |
| :--- | :--- |
| **Objetivo** | Melhorar o projeto já existente. |
| **Texto enviado à IA** | *"Aprimore meu site"* |
| **Resultado obtido** | Melhorias técnicas corretas (SEO/meta tags, animações de entrada, scrollspy, mensagens inline no formulário, botão "voltar ao topo"), porém pouco perceptíveis visualmente. |
| **Análise crítica** | O resultado era tecnicamente bom, mas não resolvia minha insatisfação real: o topo continuava simples e o site parecia apertado. Aprendi que pedidos vagos geram melhorias vagas. |
| **Decisão tomada** | Reformulei o pedido citando exatamente o que eu queria ver (próximo prompt). |

### Prompt 03 — Redesign profissional do topo

| Item | Registro |
| :--- | :--- |
| **Objetivo** | Obter visual profissional, com espaço para minha foto, imagem de fundo no início e mais espaçamento. |
| **Texto enviado à IA** | *"quero um site profissional, que dê pra colocar minha foto, e imagem de fundo no inicio, quero mais espaçamento"* |
| **Resultado obtido** | Hero em tela cheia (100vh) com imagem de fundo e overlay, foto em moldura circular com anel decorativo, seções com espaçamento fluido (`clamp()`), etiquetas de seção, botões novos e navbar translúcida. |
| **Análise crítica** | Atendeu bem ao pedido; a imagem de fundo foi gerada automaticamente como placeholder, mas a moldura da foto ficou com detalhes que precisaram de ajuste fino. |
| **Decisão tomada** | Mantive a estrutura e solicitei apenas correções pontuais de alinhamento (Prompt 05). Substituí o `banner.jpg` padrão pelo meu próprio arquivo quando necessário. |

### Prompt 04 — Remoção de emojis e alternativa profissional

| Item | Registro |
| :--- | :--- |
| **Objetivo** | Substituir todos os emojis por alternativas profissionais e coerentes, mantendo apenas o favicon. |
| **Texto enviado à IA** | *"Retire todos os emojis do site, exceto o da favicon, e me dê uma alternativa mais profissional, coerente e rebuscada"* |
| **Resultado obtido** | Substituição por Bootstrap Icons (CDN) com mapeamento semântico por seção. |
| **Análise crítica** | Visualmente excelente, mas ao reler o enunciado percebi que a restrição técnica permite **apenas Bootstrap 5** — um pacote extra de ícones poderia ser questionado. Além disso, emojis residuais permaneciam nas mensagens do JavaScript. |
| **Decisão tomada** | Decidi por conta própria substituir os ícones por **SVG embutido diretamente no HTML**: mesmo visual, zero dependência externa e conformidade total com a restrição. Também reescrevi as mensagens do formulário em tom formal. Este foi o ponto onde mais validei criticamente a resposta da IA contra os requisitos. |

### Prompt 05 — Revisão conforme o enunciado da entrega

| Item | Registro |
| :--- | :--- |
| **Objetivo** | Verificar o projeto contra os critérios da AC02 e organizar o backlog. |
| **Texto enviado à IA** | Colagem integral do enunciado da 1ª Entrega + link do board do Trello + *"O que falta no meu trello? meu readme está correto?"* |
| **Resultado obtido** | Checklist completo: identifiquei links simulados (`href="#"`) nos projetos violando a restrição "sem funcionalidades que não funcionem", ausência do campo GU e do link publicado no README, documentação desatualizada e cards do Trello sem ID/MoSCoW/critérios. |
| **Análise crítica** | A aplicação estava bonita, mas a rastreabilidade requisito → história → backlog estava incompleta, o que é critério explícito de avaliação. |
| **Decisão tomada** | Corrigir os links mortos, atualizar README e esta documentação, padronizar os cards do Trello diretamente no board e remover o card fora de escopo ("Cadastrar dados pessoais" — CRUD/banco não existe neste projeto estático). |

---

## 3. Histórias de Usuário

* **US01:** Como **visitante**, quero **visualizar a apresentação pessoal com nome, foto e curso**, para **saber imediatamente quem é a autora e o que ela estuda**.
* **US02:** Como **recrutador**, quero **consultar formação acadêmica e experiências relevantes**, para **avaliar o histórico educacional e profissional**.
* **US03:** Como **recrutador**, quero **ver as competências técnicas e comportamentais**, para **entender as aptidões em lógica e desenvolvimento**.
* **US04:** Como **visitante**, quero **acessar a lista de projetos com tecnologias utilizadas**, para **acompanhar os trabalhos desenvolvidos no curso**.
* **US05:** Como **visitante**, quero **conhecer hobbies e viagens da autora**, para **compreender seu perfil pessoal além do acadêmico**.
* **US06:** Como **visitante**, quero **enviar uma mensagem pelo formulário de contato com validação**, para **me comunicar com a autora de forma guiada**.
* **US07:** Como **usuário mobile**, quero **navegar por um menu claro que se adapta à tela**, para **alcançar qualquer seção em qualquer dispositivo**.
* **US08:** Como **leitor**, quero **sinais visuais de posição e apoios de navegação (seção ativa no menu, botão voltar ao topo)**, para **me orientar durante a leitura**.

---

## 4. Critérios de Aceitação

**US01 — Apresentação pessoal**
* O hero ocupa toda a altura da janela e exibe nome completo, badge "ADS · 2º Semestre @ IFSP", texto de apresentação e foto em moldura circular.
* Se `assets/foto.jpg` não existir, um avatar com as iniciais "CK" é exibido automaticamente (sem imagem quebrada).

**US02 — Formação e experiências**
* Três cards de formação (ADS/IFSP, Técnico em Administração, Engenharia Ambiental) com título, status e descrição.
* Três blocos de experiência — convivência com analista de sistemas (pai), vendas freelance nos fins de semana e práticas acadêmicas no IFSP — cada um com origem/período e descrição.

**US03 — Competências**
* Oito pílulas com ícone SVG e rótulo, dispostas em 4 colunas no desktop e 2 no mobile.

**US04 — Projetos**
* Três projetos listados: portal "O Mundo do Snow", site "Cafeteria IFSP" (nota máxima) e este Portfólio Pessoal.
* Cada projeto tem título, descrição e badges de tecnologias.
* Não existem links mortos: o card do portfólio aponta para o repositório real; os demais exibem rótulos de status não clicáveis.

**US05 — Hobbies e viagens**
* Três cards de hobbies com ícone centralizado.
* Card "Refúgio no Litoral" com ícone e texto, mais quatro destinos visitados visíveis: São Paulo, Bahia, Ceará e Paraná.

**US06 — Formulário de contato**
* Campos Nome, E-mail e Mensagem são obrigatórios.
* Envio com campo vazio ou e-mail em formato inválido exibe mensagem de erro inline na página.
* Dados válidos exibem confirmação de sucesso inline (sem `alert`) e limpam o formulário.

**US07 — Navegação responsiva**
* Acima de 992px o menu mostra todos os itens; abaixo disso, botão hambúrguer funcional.
* Cliques em âncoras rolam suavemente até a seção e nenhum título fica encoberto pelo menu fixo.
* No mobile, o menu fecha automaticamente após escolher um item.

**US08 — Apoios de navegação**
* O link correspondente à seção visível recebe destaque durante a rolagem.
* Botão "voltar ao topo" aparece após ~400px de rolagem e retorna suavemente ao início.
* Títulos, cards e pílulas surgem com animação ao entrar na viewport (respeitando `prefers-reduced-motion`).

---

## 5. Priorização MoSCoW

| História | Funcionalidade | Prioridade | Justificativa |
| :--- | :--- | :--- | :--- |
| US01 | Apresentação pessoal | **Must have** | Identificar a autora é o propósito mínimo do portfólio. |
| US02 | Formação e experiências | **Must have** | Histórico educacional é conteúdo central exigido. |
| US03 | Competências | **Must have** | Demonstra aptidões avaliadas pelo público-alvo. |
| US04 | Projetos | **Must have** | Evidencia prática de desenvolvimento. |
| US06 | Formulário com validação | **Must have** | Garante a interação obrigatória em JavaScript. |
| US07 | Navegação responsiva | **Must have** | O enunciado exige navegação clara em desktop e mobile. |
| US05 | Hobbies e viagens | **Should have** | Conteúdo exigido pelo enunciado, mas não bloqueia o uso essencial. |
| US08 | Scrollspy, voltar ao topo, animações | **Should have** | Elevam a qualidade da experiência sem ser essenciais à primeira versão — implementadas. |
| — | Modo escuro; versão em inglês | **Could have** | Melhorias desejáveis para futuras iterações. |
| — | Envio real de e-mails/backend; área administrativa (CRUD) | **Won't have now** | Exigiriam servidor/banco, violando a restrição de site estático HTML/CSS/JS. |

---

## 6. Descrição do MVP

* **Necessidades atendidas:** apresentar identificação, formação, competências, projetos, experiências, hobbies, viagens e canal de contato, com navegação clara em qualquer dispositivo.
* **Seções disponíveis:** as 8 seções completas do portfólio.
* **Interações implementadas:** menu hambúrguer responsivo; rolagem suave com compensação do menu fixo; destaque da seção ativa (scrollspy); animações de entrada; botão "voltar ao topo"; validação inline do formulário; fallback da foto de perfil; fechamento automático do menu mobile.
* **Histórias incluídas no MVP:** US01, US02, US03, US04, US06, US07 (Must have) e US05, US08 (Should have, já entregues).
* **Fora desta versão:** envio real das mensagens por servidor/e-mail (BL16), modo escuro, versão em inglês e área administrativa.
* **Condições de conclusão:** todas as histórias Must have implementadas e verificáveis pelos critérios da seção 4; código publicado no GitHub sem erros no console; página acessível publicamente via GitHub Pages; layout testado em desktop e celular.

---

## 7. Backlog Acionável

Gestão diária do backlog no Trello: https://trello.com/b/lRmxaCj5/portfolio-pessoal (board espelha a tabela abaixo).

| ID | Item do Backlog | História | MoSCoW | Critérios de Aceitação | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BL01 | Criar estrutura HTML5 semântica e vincular Bootstrap 5 | US07 | Must have | Tags semânticas, CDN vinculado, console sem erros | Concluído |
| BL02 | Implementar seção de apresentação com nome, foto e curso | US01 | Must have | Nome, badge IFSP, texto e foto/moldura visíveis | Concluído |
| BL03 | Criar hero em tela cheia com imagem de fundo e CTAs | US01 | Could have | 100vh com `banner.jpg`; botões rolam às seções | Concluído |
| BL04 | Construir cards da formação acadêmica | US02 | Must have | 3 formações com título, status e descrição | Concluído |
| BL05 | Criar painel de competências em pílulas | US03 | Must have | 8 pílulas com SVG, 4 colunas desktop / 2 mobile | Concluído |
| BL06 | Implementar listagem de projetos com links válidos | US04 | Must have | 3 projetos; título, descrição e badges; zero links mortos | Concluído |
| BL07 | Montar blocos de experiências relevantes | US02 | Should have | 3 blocos (pai analista, vendas freelance, IFSP) com origem/período | Concluído |
| BL08 | Criar cards de hobbies e lazer | US05 | Should have | 3 cards com ícone centralizado e descrição | Concluído |
| BL09 | Criar seção de viagens realizadas | US05 | Should have | Card Refúgio no Litoral + destinos SP, BA, CE e PR visíveis | Concluído |
| BL10 | Desenvolver formulário com validação em JavaScript | US06 | Must have | Erros/sucesso inline; campos obrigatórios; e-mail válido | Concluído |
| BL11 | Implementar menu responsivo com rolagem suave | US07 | Must have | Hambúrguer <992px; âncoras suaves; menu fecha ao clicar | Concluído |
| BL12 | Adicionar destaque da seção ativa no menu | US08 | Should have | Link ativo acompanha a rolagem | Concluído |
| BL13 | Adicionar botão flutuante "voltar ao topo" | US08 | Should have | Aparece após ~400px; retorno suave | Concluído |
| BL14 | Substituir emojis por ícones SVG profissionais | US08 | Could have | Zero emojis no corpo; SVG inline sem libs extras | Concluído |
| BL15 | Publicar o portfólio no GitHub Pages | US07 | Must have | Página pública em cicintindo.github.io/portfolio | Concluído |
| BL16 | Enviar mensagens do formulário por servidor | US06 | Won't have now | Integração backend/e-mail (fora do escopo estático) | Não iniciado |

---

## Rastreabilidade

Definição (seção 1) → Histórias (seção 3) → Critérios (seção 4) → MoSCoW (seção 5) → MVP (seção 6) → Backlog (seção 7) → Aplicação entregue. Todo item Must have e Should have do MVP está implementado no código e publicado em https://cicintindo.github.io/portfolio/; o único item não implementado (BL16, Won't have now) está explicitamente registrado como fora do escopo desta entrega.

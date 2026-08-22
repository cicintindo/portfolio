# Portfólio Pessoal — Cintia Kamei

Portfólio pessoal responsivo desenvolvido como parte da 1ª Entrega da disciplina, aplicando desenvolvimento orientado por requisitos com apoio de Inteligência Artificial. O objetivo é apresentar minha trajetória acadêmica em Análise e Desenvolvimento de Sistemas (IFSP), habilidades lógicas, histórico educacional, projetos, interesses pessoais e formas de contato.

---

## Identificação do Aluno

* **Nome:** Cintia Kamei
* **GU:** GU307921X
* **Curso:** Análise e Desenvolvimento de Sistemas (2º Semestre)
* **Instituição:** Instituto Federal de São Paulo (IFSP)
* **E-mail:** cintia.kamei@aluno.ifsp.edu.br

---

## Link da Versão Publicada

**URL:** https://cicintindo.github.io/portfolio/

> Para ativar a publicação: no repositório no GitHub, acesse **Settings → Pages**, em *Branch* selecione `main` e a pasta `/ (root)`, e clique em **Save**. O link acima passa a funcionar em alguns minutos.

---

## Tecnologias Utilizadas

* **HTML5 semântico:** estruturação da página (`nav`, `section`, `footer`, hierarquia de títulos).
* **CSS3 customizado:** variáveis CSS, tipografia fluida com `clamp()`, animações e tema em tons pastéis (rosa).
* **Bootstrap 5 (CDN):** grid responsivo, navbar e componentes visuais — único framework utilizado, conforme restrição da atividade.
* **JavaScript (ES6):** interações implementadas sem bibliotecas externas.
* **Ícones em SVG inline:** vetores embutidos diretamente no HTML, sem dependências adicionais.
* **Google Fonts (Poppins):** tipografia do projeto.

---

## Resumo das Funcionalidades

* **Hero em tela cheia** com imagem de fundo (`assets/banner.jpg`), foto de perfil em moldura animada e botões de ação.
* **Menu de navegação fixo e responsivo** (botão hambúrguer no mobile) com rolagem suave até cada seção.
* **Destaque automático da seção ativa** no menu conforme a rolagem (scrollspy).
* **Animações de entrada** dos títulos, cards e pílulas de competências ao rolar a página.
* **Botão flutuante "voltar ao topo"** que aparece após a rolagem inicial.
* **Formulário de contato com validação** em JavaScript: campos obrigatórios, verificação de formato de e-mail e mensagens de sucesso/erro exibidas na própria página.
* **Fallback automático da foto de perfil** (avatar com iniciais) caso o arquivo não seja encontrado.
* **8 seções completas:** Apresentação, Formação Acadêmica, Competências, Projetos, Experiências, Hobbies, Viagens e Contato.

---

## Como Executar o Projeto Localmente

1. Baixe ou clone este repositório: `git clone https://github.com/cicintindo/portfolio.git`
2. Mantenha a estrutura de pastas (`css/`, `js/`, `assets/`, `docs/`).
3. Abra o arquivo `index.html` em qualquer navegador atualizado (duplo clique).
4. *Opcional:* no VS Code, instale a extensão **Live Server**, clique com o botão direito sobre o `index.html` e escolha **Open with Live Server**.

---

## Estrutura do Projeto

```
portfolio/
├── index.html          # Página única do portfólio
├── css/
│   └── style.css       # Estilos customizados (tema rosa pastel, animações)
├── js/
│   └── script.js       # Interações: menu, scrollspy, reveal, formulário, voltar ao topo
├── assets/
│   ├── banner.jpg      # Imagem de fundo do topo
│   └── foto.jpg        # Foto de perfil
├── docs/
│   └── documentacao.md     # Documentação obrigatória (7 seções)
└── README.md           # Este arquivo
```

---

## Gestão do Backlog

O planejamento e o acompanhamento das tarefas estão documentados em dois lugares:

* **Trello:** https://trello.com/b/lRmxaCj5/portfolio-pessoal (board com colunas To Do / Doing / Done)
* **docs/documentacao.md** — seção *7. Backlog Acionável*, com ID, história relacionada, prioridade MoSCoW, critérios de aceitação e status de cada item.

---

## Documentação Completa

A documentação detalhada contendo a Definição do Projeto, Prompts Utilizados, Histórias de Usuário, Critérios de Aceitação, Priorização MoSCoW, Descrição do MVP e Backlog Acionável encontra-se em:

* `docs/documentacao.md`

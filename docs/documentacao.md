# Documentação do Projeto: Portfólio Pessoal

## 1. Definição do Projeto
* **Nome do Projeto:** Portfólio Pessoal Interativo — Cintia Kamei
* **Problema/Necessidade Atendida:** A ausência de um repositório centralizado e acessível para apresentar meu perfil acadêmico, habilidades lógicas, histórico educacional e interesses pessoais para professores, colegas e recrutadores da área de tecnologia.
* **Objetivo Principal:** Apresentar minha trajetória e competências como estudante de Análise e Desenvolvimento de Sistemas no IFSP, utilizando uma estrutura limpa, responsiva e alinhada à minha identidade pessoal.
* **Público-Alvo:** Recrutadores de TI, professores e alunos do Instituto Federal de São Paulo (IFSP), além de conexões profissionais.
* **Proposta Visual:** Estilo moderno e minimalista, utilizando uma paleta de cores em tons pastéis com destaque para tons de rosa, tipografia legível (Poppins) e layout responsivo.
* **Conteúdo Apresentado:**
  1. Identificação e Apresentação Pessoal
  2. Formação Acadêmica
  3. Conhecimentos e Competências
  4. Projetos Realizados ou em Desenvolvimento
  5. Experiências Relevantes
  6. Hobbies e Lazer
  7. Viagens Realizadas
  8. Formas de Contato
* **Principais Funcionalidades:** Navegação fixa por ancoragem, cards interativos com efeito hover, formulário de contato com validação em JavaScript e layout adaptável para dispositivos móveis.
* **Tecnologias Utilizadas:** HTML5 semântico, CSS3 customizado, JavaScript (ES6) e Bootstrap 5 (via CDN).

---

## 2. Prompts Utilizados

### Prompt 01 - Estruturação de Requisitos e Histórias de Usuário
* **Objetivo:** Definir as Histórias de Usuário e Critérios de Aceitação testáveis para o projeto.
* **Texto Enviado à IA:** *"Crie histórias de usuário no formato padrão para um portfólio pessoal responsivo com HTML, CSS, JS e Bootstrap 5."*
* **Resultado Obtido:** Histórias bem estruturadas, mas com critérios de aceitação genéricos.
* **Análise Crítica:** Critérios como "o site deve ser agradável" não permitem verificação objetiva.
* **Decisão Tomada:** Refiz os critérios de aceitação tornando-os objetivos (ex: verificar presença de campos obrigatórios e links válidos).

### Prompt 02 - Layout Personalizado em Bootstrap 5 e Estilização
* **Objetivo:** Gerar a estrutura HTML do portfólio integrada com componentes do Bootstrap 5 na ordem solicitada pelo trabalho.
* **Texto Enviado à IA:** *"Gere um código HTML5 responsivo utilizando Bootstrap 5 com as seções: Apresentação, Formação, Competências, Projetos, Experiências, Hobbies, Viagens e Contato."*
* **Resultado Obtido:** Estrutura funcional, porém com estilo padrão do Bootstrap (azul/cinza).
* **Análise Crítica:** Necessidade de adequar o CSS para refletir a proposta visual minimalista em tons de rosa.
* **Decisão Tomada:** Criei classes CSS customizadas para sobrescrever o estilo padrão e aplicar os tons pastéis e cards arredondados.

---

## 3. Histórias de Usuário

* **US01:** Como **visitante**, quero **visualizar a apresentação pessoal da Cintia**, para **conhecer seu perfil e sua área de estudo no IFSP**.
* **US02:** Como **recrutador**, quero **consultar a formação acadêmica e experiências prévias**, para **avaliar seu histórico educacional e profissional**.
* **US03:** Como **recrutador**, quero **visualizar as competências e habilidades lógicas**, para **entender suas aptidões em resolução de problemas**.
* **US04:** Como **visitante**, quero **acessar a seção de projetos**, para **acompanhar os trabalhos desenvolvidos no curso**.
* **US05:** Como **visitante**, quero **conhecer os hobbies e viagens da autora**, para **compreender seu perfil pessoal**.
* **US06:** Como **visitante**, quero **enviar uma mensagem pelo formulário de contato**, para **estabelecer comunicação direta com a autora**.

---

## 4. Critérios de Aceitação

* **US01 - Identificação e Apresentação Pessoal**
  * A seção deve exibir o nome completo (Cintia Kamei), foto de perfil, instituição (IFSP) e resumo sobre o perfil analítico.
  * O conteúdo deve permanecer centralizado e legível em telas de celulares e computadores.

* **US02 - Formação e Experiências**
  * Exibir cards organizados com os cursos: ADS (IFSP), Técnico em Administração e Engenharia Ambiental.
  * Conter informações sobre o status de cada formação e breve descrição.

* **US03 - Competências e Habilidades**
  * Apresentar pílulas/tags organizadas contendo hard skills e soft skills (ex: Aprendizado Rápido, Resolução de Problemas, HTML/CSS).

* **US04 - Listagem de Projetos**
  * Exibir cards contendo título do projeto, breve descrição, tecnologias e botão de ação funcional.

* **US05 - Hobbies e Viagens**
  * Apresentar os hobbies (Música, cachorro Snow e Quebra-cabeças) e o hábito de viagens ao Litoral Paulista em cards visuais claros.

* **US06 - Formulário de Contato**
  * Exibir campos para Nome, E-mail e Mensagem.
  * O JavaScript deve impedir o envio de campos vazios e emitir um alerta na tela confirmando o envio.

---

## 5. Priorização MoSCoW

| História | Funcionalidade | Prioridade | Justificativa |
| :--- | :--- | :--- | :--- |
| **US01** | Apresentação e Identificação | **Must have** | Requisito básico para identificação do autor do portfólio. |
| **US02** | Formação Acadêmica | **Must have** | Essencial para demonstrar a trajetória educacional no IFSP. |
| **US03** | Competências Técnicas e Pessoais | **Must have** | Indispensável para destacar habilidades de raciocínio lógico e código. |
| **US04** | Seção de Projetos | **Must have** | Apresenta os trabalhos práticos desenvolvidos. |
| **US06** | Formulário de Contato com Validação JS | **Must have** | Garante a interatividade obrigatória do projeto. |
| **US05** | Hobbies e Viagens | **Should have** | Agrega valor à marca pessoal, sem bloquear o funcionamento do MVP. |

---

## 6. Descrição do MVP (Produto Mínimo Viável)

O MVP consiste na primeira versão funcional e responsiva do portfólio pessoal da Cintia Kamei[cite: 1].

* **Necessidades Atendidas:** Centralização do currículo acadêmico, exibição de competências lógicas, canal de contato direto e apresentação pessoal[cite: 1].
* **Seções Disponíveis:** Apresentação, Formação, Competências, Projetos, Experiências, Hobbies, Viagens e Contato[cite: 1].
* **Interações Implementadas:**
  * Menu de navegação responsivo tipo "hambúrguer" para telas menores.
  * Navegação por rolagem suave até as seções através do menu fixo.
  * Validação de formulário via JavaScript disparando alerta de confirmação.
* **Histórias de Usuário Incluídas:** US01, US02, US03, US04, US05 e US06[cite: 1].
* **Fora do MVP nesta versão:** Banco de dados integrado para salvar mensagens e envio real de e-mails via servidor backend.
* **Condição de Conclusão:** O MVP está concluído quando todas as seções contiverem dados reais atualizados, o design rosa/minimalista estiver aplicado via CSS e o código for publicado sem erros no GitHub Pages[cite: 1].

---

## 7. Backlog Acionável

| ID | Item do Backlog | História | Prioridade | Critérios de Aceitação | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BLK01** | Criar a estrutura HTML5 e vincular Bootstrap 5 e Google Fonts | N/A | Must have | Arquivo `index.html` funcional com CDNs e meta tags responsivas. | Concluído |
| **BLK02** | Implementar a seção de Apresentação com foto e biografia | US01 | Must have | Nome, curso no IFSP e texto sobre perfil analítico visíveis na tela. | Concluído |
| **BLK03** | Construir os cards da Formação Acadêmica e Experiências | US02 | Must have | Formações exibidas em cards responsivos com descrições. | Concluído |
| **BLK04** | Criar o painel de Competências com pílulas visuais | US03 | Must have | Habilidades técnicas e comportamentais destacadas em grid. | Concluído |
| **BLK05** | Implementar a seção de Projetos | US04 | Must have | Cards com badges das tecnologias e botões informativos. | Concluído |
| **BLK06** | Montar os blocos de Hobbies (Música, Snow, Quebra-cabeças) e Viagens | US05 | Should have | Seções com textos descritivos e design rosa pastel. | Concluído |
| **BLK07** | Desenvolver formulário de contato e script de validação em JS | US06 | Must have | Script `script.js` valida campos obrigatórios e exibe alerta de sucesso. | Concluído |
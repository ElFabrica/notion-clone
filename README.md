# 📝 Notion Clone

## Visão Geral

Este projeto é um clone funcional do Notion, focado em oferecer uma experiência de edição de documentos colaborativa e em tempo real, com uma arquitetura moderna e escalável. Ele aborda o desafio de criar um ambiente dinâmico para organização de informações, gerenciamento de notas e colaboração, replicando as funcionalidades essenciais de plataformas como o Notion, mas com uma abordagem técnica diferenciada.

## Problema Resolvido

Em ambientes de trabalho e estudo, a necessidade de organizar informações, criar documentos ricos e colaborar em tempo real é fundamental. Ferramentas tradicionais muitas vezes falham em oferecer a flexibilidade e a sincronização necessárias para equipes dinâmicas. Este projeto visa resolver a complexidade de construir uma aplicação que:

*   Permita a criação e edição de documentos com formatação rica (texto, imagens, embeds).
*   Garanta a sincronização instantânea das alterações entre múltiplos usuários e dispositivos.
*   Ofereça uma estrutura hierárquica flexível para organizar notas e páginas.
*   Inclua funcionalidades de arquivamento e publicação de conteúdo.
*   Proporcione uma experiência de usuário fluida e responsiva.

## Solução Implementada

O Notion Clone foi desenvolvido como uma aplicação Full Stack, utilizando o **Next.js** para o frontend e backend (com App Router), e o **Convex** como banco de dados em tempo real e camada de backend. Esta combinação permite uma sincronização de dados eficiente e uma experiência de usuário altamente interativa. As principais funcionalidades incluem:

*   **Edição de Documentos Rich Text:** Utilização do **BlockNote** para um editor de texto robusto, permitindo a criação de conteúdo dinâmico com blocos.
*   **Sincronização em Tempo Real:** Graças ao **Convex**, todas as alterações nos documentos são propagadas instantaneamente para todos os usuários conectados, garantindo uma colaboração sem conflitos.
*   **Estrutura Hierárquica de Páginas:** Documentos podem ser aninhados infinitamente, replicando a organização flexível de workspaces do Notion.
*   **Gerenciamento de Estado Otimizado:** Com **Zustand**, o gerenciamento de estado global é performático e reativo.
*   **Autenticação Segura:** Implementação de autenticação de usuário via **Clerk**, garantindo acesso seguro e gerenciamento de sessões.
*   **Armazenamento de Mídia:** Integração com **EdgeStore** para upload e gerenciamento de imagens e outros arquivos.
*   **Publicação e Arquivamento:** Funcionalidades para publicar documentos (tornando-os acessíveis publicamente) e arquivá-los (movendo para uma lixeira virtual).

## Stack Tecnológica

*   **Frontend & Backend:** [Next.js 16.1.6](https://nextjs.org/) (App Router) com [TypeScript](https://www.typescriptlang.org/)
*   **Banco de Dados & Backend as a Service (BaaS):** [Convex](https://www.convex.dev/) (Real-time Database, Serverless Functions)
*   **Autenticação:** [Clerk](https://clerk.com/)
*   **Armazenamento de Arquivos:** [EdgeStore](https://edgestore.dev/)
*   **Editor de Texto Rich Text:** [BlockNote](https://www.blocknote.dev/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Shadcn/UI](https://ui.shadcn.com/)
*   **Gerenciamento de Estado:** [Zustand](https://zustand-demo.pmnd.rs/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Notificações:** [Sonner](https://sonner.emilkowalski.pl/)
*   **Seleção de Emojis:** [Emoji Picker React](https://www.npmjs.com/package/emoji-picker-react)

## Como o Projeto se Diferencia (e se assemelha) ao Notion Original

O Notion original é uma ferramenta robusta e multifuncional. Este clone busca replicar a **experiência central de edição e organização de documentos em tempo real**, com foco em uma arquitetura moderna e otimizada para desenvolvedores. As principais semelhanças e divergências incluem:

*   **Sincronização em Tempo Real:** Assim como o Notion, este projeto oferece sincronização instantânea, um diferencial técnico complexo que foi implementado de forma eficiente com Convex.
*   **Estrutura Hierárquica:** A capacidade de aninhar páginas e documentos é uma característica fundamental do Notion replicada aqui, permitindo uma organização flexível.
*   **Foco na Edição de Conteúdo:** O uso do BlockNote proporciona uma experiência de edição de rich text muito similar à do Notion, com blocos de conteúdo e formatação intuitiva.
*   **Escopo:** O projeto foca nas funcionalidades essenciais de notas e documentos, sem a complexidade de bancos de dados, calendários ou outras integrações avançadas que o Notion oferece. Isso demonstra a capacidade de construir um *core* sólido e escalável.
*   **Tecnologias:** Enquanto o Notion utiliza uma stack interna complexa, este projeto demonstra proficiência em tecnologias de ponta do ecossistema JavaScript/TypeScript (Next.js, Convex, Clerk), que são altamente valorizadas no mercado.

## Design e Experiência do Usuário

O design foi construído com **Tailwind CSS**, **Radix UI** e **Shadcn/UI** para garantir uma interface moderna, responsiva e acessível. A atenção foi dada à experiência do usuário, incluindo:

*   **Interface Intuitiva:** Navegação clara e um layout que facilita a criação e organização de documentos.
*   **Modo Escuro/Claro:** Suporte a temas para preferência do usuário.
*   **Responsividade:** Adaptação da interface para diferentes tamanhos de tela (desktop, tablet, mobile).
*   **Feedback Visual:** Notificações (`Sonner`) e esqueletos de carregamento para uma experiência mais fluida.

## Como Rodar o Projeto

(Manter as instruções originais de `Getting Started` aqui, mas talvez com um título mais amigável como "Configuração e Execução Local")

## Demo

[Demo Web](https://notion-clone-tau-pied.vercel.app/)

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento e executar o projeto em sua máquina.

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (versão 18 ou superior)
*   [pnpm](https://pnpm.io/) (ou npm/yarn)
*   Contas nas plataformas: [Clerk](https://clerk.com/), [Convex](https://www.convex.dev/) e [EdgeStore](https://edgestore.dev/)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/ElFabrica/notion-clone.git
cd notion-clone
```

### Passo 2: Instalar Dependências

```bash
pnpm install
```

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes chaves obtidas em suas respectivas plataformas:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# EdgeStore (File Storage)
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Passo 4: Configurar o Convex

Inicie o ambiente de desenvolvimento do Convex para provisionar o banco de dados e as funções serverless:

```bash
npx convex dev
```

### Passo 5: Executar o Projeto

Em um novo terminal, inicie o servidor de desenvolvimento do Next.js:

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`.

---

## 🛠️ Scripts Disponíveis

*   `pnpm dev`: Inicia o servidor de desenvolvimento do Next.js.
*   `pnpm build`: Cria a versão de produção da aplicação.
*   `pnpm start`: Inicia o servidor de produção.
*   `pnpm lint`: Executa a verificação de linting do código.
*   `npx convex dev`: Inicia o ambiente de desenvolvimento do Convex.

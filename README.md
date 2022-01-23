# Teste Frontend

## Introdução

Esse projeto se destina à Operand como teste prático, bem como um repositório de facil acesso para aprender sobre o básico de Vue.JS, Nuxt e Axios.

O projeto foi criado utilizando Visual Studio como IDE com Vue.JS e Nuxt em seu núcleo, Vuetify para elementos visuais e Axios para requisições à API.
Tudo citado a cima é providenciado pelo pacote Vue CLI.

## Requerimentos

- [VSCode IDE](https://code.visualstudio.com/Download)
- [GIT](https://git-scm.com/downloads)
- [Node.JS + NPM](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) `Opcional`
- [Vue CLI](https://cli.vuejs.org)

## Instalação

- Baixe e instale as ferramentas requeridas;
- No VSCode, abra uma nova pasta/crie um novo projeto;
- Abra o terminal (Terminal -> Novo Terminal);
- Inicialize a pasta como um novo repositório:

> git init

- Adcione este repositório:

> git remote add origin https://github.com/RaphaelNunes10/frontend-test

- Puxe o último _commit_:

> git pull origin master

- Instale os pacotes do projeto:

> npm install

- Rode o projeto:

> npm run dev
> ou
> yarn dev

- O projeto abrirá por padrão em http://localhost:3000/ ou http://127.0.0.1:3000/.

OBS.: Se você já tiver um projeto rodando no endereço padrão de _localhost_ na porta 3000 o projeto abrirá em uma nova porta, então fique atento no que apareçe no terminal.

## Live-APP

O projeto pode ser testado em um live-APP hospedado pela Vercel em: https://frontend-test-chi.vercel.app

⚠️ Atenção: Testes executados logo após subir o projeto mostram que a as rotas API podem estar indisponíveis em alguns momentos. Teste e verifique se a página padrão do Laravel está visível em: https://operand-test-api.herokuapp.com e a lista de usuários atualiza ao efetuar as operações CRUD em: https://operand-test-api.herokuapp.com/api/users.

Se houver qualquer problema com as rotas, aguarde por alguns instantes.

O projeto da API montada em Laravel encontra se em: https://github.com/RaphaelNunes10/operand-test-api e está hospedado pela Heroku em: https://operand-test-api.herokuapp.com.

## Instruções do projeto

<details>

  <summary>Clique para expandir!</summary>

## 💻 Hello Dev

Para você que está participando do processo de seleção para a vaga de Desenvolvedor(a) Front-end, ou apenas quer deixar seu projeto em nossa base para futuras vagas.

Segue abaixo orientações para esta etapa do processo de seleção:

## 🍴 Fazer um Fork deste projeto

## ⚙️ Criar um projeto utilizando Vue Cli com as seguintes configurações

- Vue 2.x
- Babel
- Router
- Vuex
- CSS Pre-processors, Linter
- Vue Router
  - History Mode
- CSS Pre-processors
  - Sass/Scss (with node-sass)
- Linter
  - Stardand config
  - Lint on save
- Config files
  - Dedicated config files

## 🧾 Detalhes do projeto

- Para o projeto você pode utilizar um framework ou criar seus próprios componentes e estilos
- Crie um CRUD de usuários

## 🤯 Diferenciais

- Persistência dos dados (Firebase, Localstorage)
- Hospedagem da aplicação em algum serviço gratuito
- Organização nos commits
- Componentização dos elementos (que podem ser reutilizados)
- Clean Code
- Indentação / Organização nos códigos e templates
- README organizado e detalhado

## 📨 Fazer um PR (Pull Request) com o código finalizado

</details>

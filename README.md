# CRUD - VUE.JS

## 💻INSTALAÇÃO

Necessário Node.js instalado em sua máquina.

```bash

#Clone o repositório
$git clone https://github.com/renataleal335/frontend-test.git

#Entre na pasta do projeto
$cd frontend-test

#instale as dependẽncias do projeto
$npm install

#entre na pasta do front-end 
$ cd formcrud

#instale as dependẽncias do front-end
$npm install

#Inicie o servidor front-end
$npm run serve
```

Agora teremos o front-end rodando na porta : 8080


## Funcionalidades do projeto

- Cadastra novos usuários com nome completo, e-mail e senha; **(CREATE)**
- Lista todos os usuários da aplicação em uma tabela na página inicial, a tabela contém as seguintes informações: **(READ)**
  - Nome;
  - E-mail;
  - Senha;
- Editar informações de um usuário já cadastrado; **(UPDATE)**
- Remover determinado usuário da aplicação; **(DELETE)**

### Como funciona

O front-end da aplicação foi desenvolvido em Vue.js (framework JavaScript).
O projeto foi construído com o Vue CLI, que facilita a configuração e geração da aplicação Vue.js, Este rodando na porta 8080 (http://localhost:8080). 

A aplicação mencionada, é composta por 4 componentes:

- `<TheHeader.vue />`: Cabeçalho com navbar - "painel de navegação", listando as duas páginas disponíveis da aplicação;
- `<Form />`: Página que contém o formulário para cadastro de um novo usuário;
- `<Table />`: Tabela que renderiza a listagem do total de usuários cadastrados no sistema, nele também contém um modal que é renderizado caso o usuário selecione a opção de editar um usuário já cadastrado.
- 
Os componentes mencionados a cima são renderizados no "App.vue", que seria o componente raiz da aplicação. Ele define o template da nossa página.
Essa aplicação foi construída sem utilizar comunicação com uma API, os dados cadastrados são armazenados utilizando a funcionalidade do localStorage, que consiste em salvar, adicionar, recuperar ou excluir dados localmente no próprio navegador do usuário.

O framework BootstrapVue, foi usado para fazer a resposividade e estilização dos elementos da aplicação.

## Tecnologias

Abaixo estão as tecnologias e depêndencias utilizadas no desenvolvimento do projeto.

- [**Vue.js:**](https://vuejs.org/ "**Vue.js:**") Framework JavaScript Progressivo, usado para desenvolver interfaces de usuário dinâmicas com HMTL, CSS e JS.
- [**BootstrapVue:**](https://bootstrap-vue.org/docs) Framework front-end com uma grande coleção de códigos CSS, foi usado no projeto para fazer a estilização e responsividade.
- -[**Vuelidate:**](https://vuelidate.js.org/#getting-started) Biblioteca para validação de formulários baseada em modelo para Vue.js 2.0.
- [**Node.js:**](https://nodejs.org/en/docs/ "**Node.js:**") Ambiente JavaScript no lado do servidor.

:smiley:💻




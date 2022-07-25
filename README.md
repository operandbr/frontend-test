## Apresentação do projeto
Este é um projeto educacional de front-end que utiliza Vue.js 2.x.x, vue-router, vuex, firebase, sass, fontawesome e vue-the-mask, possui as funcinalidades de um CRUD (Create, Read, Upadate e Delete) utilizando o firebase como banco de dados não relacional.

Este projeto foi hospedado na Netlify, segue abaixo url para teste

[**Demo do projeto**](https://crud-vue-firebase.netlify.app/).

O projeto possui uma tela incial com uma listagem dos usuários já cadastrados, permitindo que os registros sejam alterados e deletados nesse componenete. A tela possui uma tabela e nela temos os seguintes dados:
 1. Nome completo
 2. Nome de usuário
 3. Telefone celular
 4. Data de nascimento 
 5. Cpf

Há também formatadores de dados na forma de filters que foram registrados globalmente
  Campo | Formato
  --------- | ------
  Cpf | ###.###.###-##
  Celular | (##) #####-####
  Data de Nascimento | DD/MM/YYYY
  
  ### Tela Inicial
  ![home](https://user-images.githubusercontent.com/57969613/180681589-fca11024-acec-4445-b25a-e8b57d0b9b5e.png)

Na tela de cadastro ou edição de dados temos um formulário com os campos supracitados, este campos possuem validação de campo obrigatório. A função de cadastro ou alteração de registro depende da rota previamente acessada, caso o seja acessada a rota '/user-update' sera verificado se há dados do usuário selecionado capturados pela store da tela inicial e esses dados serão populados no formulário. Ao fim submeter o formulário será disparado um alerta informando se houve sucesso ou falha e no fim será feito o redirecionamento para a página inicial.

### formulário Cadastro
![form](https://user-images.githubusercontent.com/57969613/180681876-e5804bf7-0ee6-435a-98e2-39e2914aa162.png)

### formulário Edição
![edit](https://user-images.githubusercontent.com/57969613/180681954-b5a68e13-4d4a-419e-9f26-8f82d4bc76d7.png)


**Observação:** 
1. O .env possui dados de configuração sensíveis que foram deixados para que seja testado localmente de quem clonar o repositório 
## Instalação de dependências
```
yarn install
```

### Compilação do projeto local (hot-reload)
```
yarn serve
```

### Build do projeto
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### documentação VUE CLI
See [Configuration Reference](https://cli.vuejs.org/config/).

# POC AngularIO, Apollo Client, API graphQL
Desenvolvimento da prova de conceito, usando as stacks abaixo:
*Frontend:* AngularIO, Bootstrap, Apollo Angular
*Backend:* Node.js + Express + graphQL

#### Baixando o projeto e instalando dependências
Para clonar o projeto, vá para o diretório local desejado e use o comando abaixo, com a urL https ou SSH key:
```sh
$ git clone url-https|SSH
```
Para instalar as dependências necessárias, em ambos os diretórios `/client` e `server/`, use o comando abaixo:  
```sh
$ npm i
```
### Acessando o servidor da API graphQl
No diretório `/server`, digite o comando abaixo:
```sh
$ node server
```
Após digite `http://localhost:4000/graphql` na barra de navegação.
Aparecerá uma interface graphiQl, onde se poderá testar as queries e mutations declaradas.

### Rodando a aplicação Angular
No diretório `/client`, digite o comando abaixo:
```sh
$ ng serve
```
Após digite `http://localhost:4200/graphql` na barra de navegação.
Qualquer alteração no projeto, com o serviço rodando, causará o refresh da página automaticamente.

#####  Criando componentes e recursos com angular-cli

Para criar um novo componente:
```sh
$ ng g c pasta/nome-do-componente
```
Para criar um novo componente em um módulo específico:
```sh
$ ng g c pasta/nome-do-componente --module nome-do-módulo
```
Para criar demais recursos:
```sh
$ ng g directive|pipe|service|class|guard|interface|enum|module
```

##### Rodando o build
Os arquivos serão gerados em `/dist`, após digitar o comando abaixo:
```sh
$ ng build
```
Gerar build para ambiente de produção, use a flag `--prod`
```sh
$ ng build --prod
```

##### Rodando testes unitários
Para executar testes unitários via [Karma](https://karma-runner.github.io), digite o comando abaixo:
```sh
$ ng test
```

##### Rodando testes end-to-end
Para executar testes end-to-end tests via [Protractor](http://www.protractortest.org/).
```sh
$ ng e2e
```
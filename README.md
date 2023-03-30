<div align="center">
  <img src="https://raw.githubusercontent.com/jhonatanffelipe/my-todo-backend/master/src/assets/logo-purple.png" />
  <br/>
  <br/>
</div>

<p align="center">
   <img alt="Tecnologias" src="https://img.shields.io/github/languages/count/jhonatanffelipe/my-todo-backend?color=6C5DD2">
   <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/jhonatanffelipe/my-todo-backend?color=6C5DD2">
   <img alt="Ultimo commit no Github" src="https://img.shields.io/github/last-commit/jhonatanffelipe/my-todo-backend?color=6C5DD2">
   <img alt="Criado por" src="https://img.shields.io/badge/made%20by-jhonatanffelipe-%20?color=6C5DD2">
   <img alt="Linguagens mais usadas no programa" src="https://img.shields.io/github/languages/top/jhonatanffelipe/my-todo-backend?color=6C5DD2">
</p>

# :rocket: Sobre o projeto

O My ToDo é um aplicativo inovador de gerenciamento de tarefas, criado para facilitar a vida das pessoas que precisam lidar com diversas atividades ao longo do dia. Desenvolvido com tecnologia de ponta, o My ToDo é baseado em nuvem, o que significa que os usuários podem acessá-lo a partir de qualquer dispositivo conectado à internet, como smartphones, tablets e computadores.

Uma das grandes vantagens do My ToDo é sua interface intuitiva e amigável, que torna a utilização do aplicativo simples e agradável. Além disso, o aplicativo é altamente personalizável, permitindo que os usuários configurem suas preferências e ajustem a interface de acordo com suas necessidades.

Com o My ToDo, gerenciar tarefas nunca foi tão fácil. Seja para uso pessoal ou profissional, o aplicativo oferece uma solução eficiente e prática para quem busca otimizar seu tempo e aumentar sua produtividade.

# Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typecript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Moment.js](https://momentjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Handlebars](https://handlebarsjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [@aws-sdk/client-s3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/index.html)
- [aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

# Executando a aplicação

Para executar esta aplicação, siga os seguintes passos:

- Clone o repositório:

  ```bash
  git clone https://github.com/jhonatanffelipe/my-todo-backend.git

  ```

- Com o repositório clonado, acesse o diretório raiz do projeto e digite code . para abrir o projeto no VS Code.

- Crie um arquivo .env utilizando como base o modelo fornecido no arquivo modelo.env.

- Crie um arquivo ormconfig.json utilizando como base o modelo fornecido no arquivo modelo.ormconfig.json

- Crie a imagem do projeto e em seguida os containers, de acordo com as configurações fornecidas no arquivo docker-compose.yml, executando o seguinte comando:

  ```bash
  # Criar a imagem
  docker build .

  # Criar os containers
  docker-compose build
  ```

- Instale as dependências do projeto:

  ```bash
  # Baixar dependências
  yarn
  ```

- Após a conclusão da instalação das dependências, execute a aplicação com o seguinte comando:

  ```bash
  # Executar a aplicação
  yarn dev
  ```

- Com os bancos de dados e a aplicação rodando, criei as tabelas no banco e dados com o comando:

  ```bash
  # Criar tabelas
  yarn migration:run
  ```

Com estes passos concluídos, a aplicação estará em execução e pronta para ser utilizada.

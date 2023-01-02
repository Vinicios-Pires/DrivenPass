# Usage
```
$ git clone https://github.com/Vinicios-Pires/SecurePass.git

$ cd SecurePass

$ npm install

$ npm run dev
```
#

# API:

# Rotas de autenticação:

- POST /signup
  - Rota para cadastrar um usuário (Senha de no mínimo 10 caracteres)
  - headers: {}
  - body: {
    "email": "email@email.com",
    "password": "somepassword"
    }
- POST /signin
  - Rota para o usuário logar e receber um token através do corpo da resposta
  - headers: {}
  - body: {
    "email": "email@email.com",
    "password": "somepassword"
    }

# Rotas de credenciais:

- POST /credentials
  - Rota para o usuário registrar uma credencial
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {
    "title": "titulo",
    "url": "https://site.com",
    "username": "usuario",
    "password": "senha"
    }
- GET /credentials
  - Rota para o usuário resgatar todas as suas credenciais criadas através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- GET /credentials/:id
  - Rota para o usuário resgatar uma credencial específica informada pelo params "id" através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- DELETE /credentials/:id
  - Rota para o usuário deletar uma credencial específica informada pelo params "id"
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}

# Rotas de notas seguras:

- POST /notes
  - Rota para o usuário registrar uma nota segura ("title" máx 50 char. e "note" máx 1000 char.)
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {
    "title": "titulo",
    "note": "anotação"
    }
- GET /notes
  - Rota para o usuário resgatar todas as suas notas seguras criadas através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- GET /notes/:id
  - Rota para o usuário resgatar uma nota segura específica informada pelo params "id" através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- DELETE /notes/:id
  - Rota para o usuário deletar uma nota segura específica informada pelo params "id"
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}

# Rotas de cartões:

- POST /cards
  - Rota para o usuário registrar um cartão ("type": crédito, débito ou crédito/débito)
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {
    "title": "title",
    "number": 1234 1234 1234 1234,
    "name": "name",
    "code": 123,
    "expireIn": "dia/mês",
    "password": 1234,
    "virtual": true/false,
    "typeId": 1-crédito, 2-débito, 3-crédito/débito
    }
- GET /cards
  - Rota para o usuário resgatar todas os seus cartões criados através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- GET /cards/:id
  - Rota para o usuário resgatar um cartão específico informado pelo params "id" através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- DELETE /cards/:id
  - Rota para o usuário deletar um cartão específico informado pelo params "id"
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}

# Rotas de wi-fi:

- POST /wifi/register
  - Rota para o usuário registrar uma wi-fi
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {
    "title": "title",
    "name": "nome do wifi",
    "password": "senha do wifi"
    }
- GET /wifi
  - Rota para o usuário resgatar todas as suas wi-fis criadas através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- GET /wifi/:id
  - Rota para o usuário resgatar uma wi-fi específica informada pelo params "id" através do corpo da resposta
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}
- DELETE /wifi/:id
  - Rota para o usuário deletar uma wi-fi específica informada pelo params "wifiId"
  - headers: {
    "Authorization": "Bearer token"
    }
  - body: {}

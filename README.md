# Delivery App

Bem-vindo ao repositório do **Delivery App**! Este projeto é uma aplicação completa de delivery de pizzas, desenvolvida utilizando as seguintes tecnologias:

- Banco de Dados: MySQL com Sequelize ORM
- Backend: Node.js com Typescript seguindo o padrão de projeto MSC (Model-Service-Controller)
- Frontend: React.js com Typescript
- Conteinerização: Docker

## Índice

- [Instalação](#instalação)
- [Inicializção](#inicializção)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)

## Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Clonando o Repositório

```bash
git clone https://github.com/AlineCarolina/Delivery-App.git
cd Delivery-App
```

## Inicializção

Para iniciar a aplicação utilizando Docker, execute o comando:

```bash
docker-compose up --build
```

## Uso

A aplicaçãp estará disponível em http://localhost:5173

## Estrutura do Projeto

Estrutura básica principal, contém mais arquivos e diretórios

```plaintext
.
├── backend
│   ├── src
│   │   ├── controllers
|   |   ├── database
|   |   ├── helpers
|   |   ├── interfaces
│   │   ├── services
│   │   ├── routes
|   |   ├── tests
|   |   ├── utils
│   │   └── app.ts
│   └── Dockerfile
├── frontend
│   ├── src
│   │   ├── components
|   |   ├── context
|   |   ├── images
│   │   ├── pages
|   |   ├── provider
│   │   ├── services
|   |   ├── styles
|   |   ├── types
|   |   ├── utils
│   │   ├── App.tsx
│   │   └── index.tsx
│   └── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
└── README.md
```

## Tecnologias Utilizadas

### Backend
  * Node.js
  * Typescript
  * Express
  * JWT

### Frontend
  * React.js
  * Typescript
  * Axios

### Banco de dados
  * MySQL
  * Sequelize

### DevOps
  * Docker
  * Docker Compose

## Contribuição

  Se você deseja contribuir com este projeto, siga estas etapas:

  1. Faça um fork do projeto
  2. Crie uma branch para sua feature (git checkout -b feature/nova-feature)
  3. Commit suas mudanças (git commit -m 'Adiciona nova feature')
  4. Faça um push para a branch (git push origin feature/nova-feature)
  5. Abra um Pull Request







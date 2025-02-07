# TrecoShop

TrecoShop is an e-commerce platform built with Node.js, Express, and PostgreSQL. This project includes a backend API for managing customers, products, and orders.


## Getting Started
### Prerequisites
- Node.js
- Docker
- Docker Compose

### Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/trecoshop.git
cd trecoshop
```

2. Install dependencies:
```sh
npm install
```

3. Crie um arquivo .env no diretório raiz e adicione as seguintes variáveis de ambiente:
```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=trecoshop
```

4. Inicie o serviço Docker:

5. Inicie o servidor de desenvolvimento:
```sh
npm run dev
```

## Endpoints da API
- `POST /api/customers` - Cria um novo cliente
- `PUT /api/customers/:id` - Atualiza um cliente pelo ID
- `DELETE /api/customers/:id` - Deleta um cliente pelo ID
- `GET /api/customers/:id` - Obtém um cliente pelo ID
- `GET /api/customers` - Obtém todos os clientes com paginação
- `GET /api/customers/count` - Obtém a contagem total de clientes
- `GET /api/customers/name/:name` - Obtém clientes pelo nome

## Diagramas
O projeto inclui diagramas C4 para melhor compreensão da arquitetura do sistema. Você pode encontrá-los no diretório docs/c4-diagram.

- docs/c4-diagram/container-diagram.puml
- docs/c4-diagram/context-diagram.puml
- docs/c4-diagram/component-diagram.puml

Também foram incluidos diagramas para uma representação mais clara do banco de dados para a aplicação completa

- `docs/database-diagram/main-db.txt` - Dados utilizadas no [dbdiagram](https://dbdiagram.io/home) para gerar a base de dados
- `docs/database-diagram/main.png` - Representação gráfica do banco

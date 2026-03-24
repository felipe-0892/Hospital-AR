# 🏥 Hospital-AR — Backend Setup Documentation

Documentação básica para configuração e execução do backend do projeto Hospital-AR, desenvolvido com **Node.js**, **TypeScript**, **Express** e **Prisma ORM**, utilizando **PostgreSQL** como banco de dados.

---

## 📦 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker (para banco de dados)
- ts-node-dev
- dotenv

---

## 📁 Estrutura Atual do Projeto

```
Hospital-AR
│
└── backend
    │
    ├── prisma
    │   └── schema.prisma
    │
    ├── src
    │   └── app.ts
    │
    ├── prisma.config.ts
    ├── tsconfig.json
    ├── package.json
    └── .env
```

---

## ⚙️ 1 — Instalar Dependências

Entrar na pasta do backend:

```bash
cd backend
```

Instalar dependências do projeto:

```bash
npm install
```

**Dependências principais utilizadas:**

```
express
prisma
@prisma/client
dotenv
```

**Dependências de desenvolvimento:**

```
typescript
ts-node-dev
@types/node
@types/express
```

---

## 🐘 2 — Configuração do Banco de Dados

O banco utilizado é **PostgreSQL**, podendo rodar via Docker.

Exemplo de configuração no `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/hospital"
PORT=3005
```

---

## 🧬 3 — Configuração do Prisma

Gerar o client do Prisma:

```bash
npx prisma generate
```

Sincronizar o banco de dados com o schema:

```bash
npx prisma db push
```

Ou utilizando migrations:

```bash
npx prisma migrate dev --name init
```

Abrir interface visual do banco:

```bash
npx prisma studio
```

---

## 🚀 4 — Rodar o Servidor

Executar o projeto em modo desenvolvimento:

```bash
npm run dev
```

Script utilizado no `package.json`:

```json
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
```

---

## 🌐 5 — Acessar a API

Após iniciar o servidor, aparecerá no terminal:

```
🚀 Servidor rodando em: http://localhost:3005
```

A API pode ser acessada em:

```
http://localhost:3005
```

**Endpoint inicial:**

```
GET /
```

**Resposta esperada:**

```json
{
  "message": "API Hospital funcionando 🚀"
}
```

---

## 📄 6 — Arquivo `app.ts`

Arquivo principal responsável por iniciar o servidor Express.

```ts
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.json({
    message: "API Hospital funcionando 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
});
```

---

## 🖥️ 7 — Terminais no VS Code

O projeto utiliza **3 terminais separados** no VS Code, cada um com uma responsabilidade específica.

> 💡 **Ordem recomendada de execução:** `docker` → `prisma` → `backend`
> Garante que o banco esteja ativo antes do Prisma conectar, e o Prisma configurado antes do servidor subir.

---

### Terminal 1 — `docker`
> Responsável por subir o container do PostgreSQL

Entrar na pasta do docker e iniciar o container:

```bash
cd backend/docker
docker-compose up -d
```

Verificar se o container está rodando:

```bash
docker ps
```

Parar o container:

```bash
docker-compose down
```

---

### Terminal 2 — `prisma`
> Responsável por configurar e gerenciar o banco de dados

Entrar na pasta do backend e aplicar o schema:

```bash
cd backend
npx prisma migrate dev --name init
```

Ou sincronizar sem migration:

```bash
npx prisma db push
```

Abrir interface visual do banco:

```bash
npx prisma studio
```

---

### Terminal 3 — `backend`
> Responsável por rodar o servidor Express

Entrar na pasta do backend e iniciar o servidor:

```bash
cd backend
npm run dev
```

Saída esperada no terminal:

```
🚀 Servidor rodando em: http://localhost:3005
```

---

## 📚 Comandos Úteis

| Comando | Terminal | Descrição |
|---|---|---|
| `npm install` | backend | Instalar dependências |
| `npm run dev` | backend | Rodar servidor |
| `npx prisma generate` | prisma | Gerar Prisma Client |
| `npx prisma db push` | prisma | Atualizar banco com schema |
| `npx prisma migrate dev` | prisma | Criar migration |
| `npx prisma studio` | prisma | Abrir Prisma Studio |
| `docker-compose up -d` | docker | Subir container PostgreSQL |
| `docker-compose down` | docker | Parar container |
| `docker ps` | docker | Listar containers ativos |

---

## ✅ Estado Atual do Projeto

No estágio atual:

- [x] Servidor Express funcionando
- [x] Porta configurada via `.env`
- [x] Prisma configurado
- [x] Banco PostgreSQL conectado
- [x] Endpoint inicial `/` funcionando
- [x] Estrutura inicial do backend criada

---

## 🔜 Próximos Passos

Próximas etapas do desenvolvimento:

- [ ] Criar rotas de Pacientes
- [ ] Criar rotas de Médicos
- [ ] Criar rotas de Consultas
- [ ] Implementar Prontuário eletrônico
- [ ] Implementar Autenticação JWT
- [ ] Criar Controllers e Services
- [ ] Documentar API com Swagger
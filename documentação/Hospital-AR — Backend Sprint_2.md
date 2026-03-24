# 🏥 Hospital-AR — Sprint 2 (Backend + Infraestrutura + Configurações + Problemas enfrentados)

## 📌 Objetivo da Sprint
Configurar a base do sistema hospitalar utilizando:

- Node.js + TypeScript
- Express
- Prisma ORM
- PostgreSQL com Docker
- Clean Architecture + SOLID
- Swagger (documentação da API)

---

## 🏗️ Estrutura do Projeto
```
HOSPITAL-AR/
└── backend/
├── docker/
│ └── docker-compose.yml
├── prisma/
│ └── schema.prisma
├── src/
│ ├── application/
│ ├── infra/
│ ├── shared/
│ └── app.ts
├── .env
├── prisma.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Configuração do Ambiente

#### 1️⃣ Leia a documentação: Hospital-AR — Backend Comandos Terminal.md

## 🧠 Problemas enfrentados (DEBUG REAL)

#### ❌ ERRO 1 — Prisma não conectava
```
Error: P1001: Can't reach database server at localhost:5434
```
- ✔ Causa:
    - Docker não estava rodando
    - Porta incorreta
    - Container não iniciado
#### ✅ Solução:
```
docker compose up -d

docker ps
```

#### ❌ ERRO 2 — DATABASE_URL não carregava
```
echo %DATABASE_URL%
→ %DATABASE_URL%
```
- ✔ Causa:
    - Windows não carrega `.env` automaticamente no terminal
#### ✅ Solução:
- Usar dotenv/config no prisma.config.ts
- Rodar sempre via Node (npm scripts)

#### ❌ ERRO 3 — Prisma 7 (mudança de config)
```
The datasource property `url` is no longer supported in schema files
```
- ✔ Causa:
    - Prisma 7 removeu url do schema.prisma
#### ✅ Solução:
- Remover url do schema.prisma
- Colocar no prisma.config.ts
#### ❌ ERRO 4 — Banco não existia
```
FATAL: database "hospital" does not exist
```
- ✔ Causa:
    - Banco não criado no container
#### ✅ Solução:
```
npx prisma migrate dev --name init
```
#### ✔ Prisma criou automaticamente o banco

#### ❌ ERRO 5 — Prisma Client não encontrado
```
Cannot find module '../prismaClient'
```
- ✔ Causa:
    - Arquivo prismaClient.ts não existia
#### ✅ Solução:

- Criado:
```
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

```
#### ❌ ERRO 6 — UseCases não encontrados
```
Cannot find module MedicoUseCases
```
- ✔ Causa:
    - Arquivo não criado ou nome errado
#### ✅ Solução:
- Criar UseCases corretamente
- Verificar paths e nomes
#### ❌ ERRO 7 — AppError não encontrado
```
Cannot find module '../../shared/errors/AppError'
```
#### ✅ Solução:
- Criado:
```
export class AppError extends Error {
  constructor(message: string, public statusCode = 400) {
    super(message);
  }
}
```
#### ❌ ERRO 8 — Swagger sem tipagem
```
Cannot find declaration file for module 'swagger-jsdoc'
```
#### ✅ Solução:
```
npm install -D @types/swagger-jsdoc
```
### 🗄️ Banco de Dados

- ✔ PostgreSQL via Docker
- ✔ Gerenciado com Prisma
- ✔ Visualização via pgAdmin

### 

- Entidades criadas:
    - Pacientes
    - Médicos
    - Especialidades
    - Consultas
    - Prontuários
    - Evoluções
    - Exames
    - Receitas
    - Internações
    - Triagem
    - Enfermagem

### 🔄 Migrations
```
npx prisma migrate dev --name init
```

- ✔ Cria banco
- ✔ Cria tabelas
- ✔ Sincroniza schema

### 🚀 Execução do Projeto
```
npm run dev
```

#### Servidor:
```
http://localhost:3005
```
### 📚 Documentação da API

#### Swagger disponível em:
```
http://localhost:3005/api-docs
```

### 📋 Endpoints disponíveis
#### 👤 Pacientes
    POST /api/pacientes
    GET /api/pacientes
    GET /api/pacientes/:id
    PUT /api/pacientes/:id
    DELETE /api/pacientes/:id
#### 👨‍⚕️ Médicos
    POST /api/medicos
    GET /api/medicos
#### 📅 Consultas
    POST /api/consultas
    GET /api/consultas
    GET /api/consultas/paciente/:pacienteId
#### 📄 Prontuários
    POST /api/prontuarios
    GET /api/prontuarios/paciente/:pacienteId

### 🧠 Arquitetura

#### Projeto baseado em:

    Clean Architecture
    SOLID
    Separação por camadas:
    application → regras de negócio
    infra       → banco e HTTP
    shared      → utilitários
#### ✅ Status da Sprint 2

    ✔ Ambiente configurado
    ✔ Banco funcionando
    ✔ Prisma integrado
    ✔ Docker rodando
    ✔ API funcional
    ✔ Swagger implementado
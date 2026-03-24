## 🔜 Abre 3 terminais no Vscode

Renomeie cada um com a descrição para não se perder
#### Terminal Inicial (caso estiver rodando pela primeira vez)
| Comando | Terminal | Descrição |
|---|---|---|
| `npm install` | backend | Instalar dependências |
| `npm run dev` | backend | Rodar servidor |
#### Terminal Docker
| Comando | Terminal | Descrição |
|---|---|---|
| `docker-compose up -d` | docker | Subir container PostgreSQL |
| `docker-compose down` | docker | Parar container |
| `docker ps` | docker | Listar containers ativos |
#### Terminal Prisma
| Comando | Terminal | Descrição |
|---|---|---|
| `npx prisma generate` | prisma | Gerar Prisma Client |
| `npx prisma db push` | prisma | Atualizar banco com schema |
| `npx prisma migrate dev` | prisma | Criar migration |
| `npx prisma studio` | prisma | Abrir Prisma Studio |
#### Terminal Backend
| Comando | Terminal | Descrição |
|---|---|---|
| `npm run dev` | backend | Rodar servidor |


## 🔜 Assim que abrir o PGAdmin, não terá o banco, então:

### ➕ Criar servidor no pgAdmin
Aba General
`Name: Hospital-AR`

Aba Connection
`Host: sistema-hospitalAR-postgres`
`Port: 5432`
`Username: admin`
`Password: admin`
`Database: hospital`


#### 🧠 Regra de ouro (Atente-se a isso)

| Quem acessa | Host correto |
|---|---|
| `Prisma / Node` | localhost:5434 |
| `pgAdmin (Docker)` | sistema-hospitalAR-postgres:5432 |
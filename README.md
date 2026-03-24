# 🏥 Hospital-AR

<p align="center">
  Sistema Hospitalar completo com foco em Prontuário Eletrônico do Paciente (PEP), desenvolvido com arquitetura moderna e boas práticas de backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20-green?logo=node.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Express.js-backend-lightgrey?logo=express" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-DB-336791?logo=postgresql" />
  <img src="https://img.shields.io/badge/Docker-container-blue?logo=docker" />
  <img src="https://img.shields.io/badge/status-em desenvolvimento-yellow" />
</p>

---

## 📌 Sobre o Projeto

O **Hospital-AR** é um sistema completo para gestão hospitalar, projetado para simular um ambiente real de atendimento clínico, incluindo:

- Atendimento de pacientes  
- Agendamento de consultas  
- Prontuário eletrônico  
- Controle de internações  
- Gestão de exames e receitas  

O projeto segue os princípios de:

- 🧠 SOLID  
- 🏗️ Clean Architecture  
- 🔄 Escalabilidade e organização de código  

---

## 🚀 Tecnologias

- Node.js  
- TypeScript  
- Express.js  
- Prisma ORM  
- PostgreSQL  
- Docker  
- pgAdmin  

---

## 🧱 Arquitetura (em evolução)

```
backend
├── src
│ ├── controllers
│ ├── services
│ ├── repositories
│ ├── routes
│ └── app.ts
│
├── prisma
│ └── schema.prisma
│
├── docker
│ └── docker-compose.yml
│
├── prisma.config.ts
├── tsconfig.json
└── .env
```
---

## ⚙️ Como Rodar o Projeto

### 📦 1. Clonar o repositório

```
git clone https://github.com/seu-usuario/hospital-ar.git
cd hospital-ar/backend

```

### 🐳 2. Subir o banco com Docker
```
docker compose up -d
```

### 📥 3. Instalar dependências
```
npm install
```
### 🧬 4. Configurar o banco (Prisma)
```
npx prisma generate
npx prisma db push
```
### 🚀 5. Rodar o servidor
```
npm run dev
```
### 🌐 6. Acessar a API
```
http://localhost:3005
```
### 🧪 Prisma Studio
```
npx prisma studio
```
### 🛠️ pgAdmin
```
http://localhost:5050
```

#### OBS: Configurações de comandos estão no arquivo dentro da pasta documentação

## 📊 Modelagem do Sistema

#### O sistema inclui as seguintes entidades:

- 👤 Usuários
- 🧑 Pacientes
- 👨‍⚕️ Médicos
- 🏥 Especialidades
- 📅 Consultas
- 📋 Prontuários
- 🧾 Evoluções médicas
- 🧪 Exames
- 💊 Receitas
- 🏥 Internações
- 🛏️ Leitos
- 🩺 Triagem
- 💉 Enfermagem
- 📦 Histórico de medicamentos

## 📅 Roadmap (Sprints)
## 
### 🟢 Sprint 01 — Setup Inicial ✅
- Estrutura do projeto
- Configuração do ambiente
- Docker + PostgreSQL
- Prisma configurado
- Modelagem completa do banco
- API inicial funcionando
### 🟡 Sprint 02 — CRUD Base
- Pacientes
- Médicos
- Especialidades
### 🟡 Sprint 03 — Consultas
- Agendamentos
- Status
- Regras de negócio
### 🟡 Sprint 04 — Prontuário
- Evolução médica
- Histórico clínico
### 🟡 Sprint 05 — Módulos Clínicos
- Exames
- Receitas
- Triagem
- Enfermagem
### 🟡 Sprint 06 — Internação
- Controle de leitos
- Internações
- Alta hospitalar
### 🟡 Sprint 07 — Segurança
- Autenticação JWT
- Controle de acesso
- Perfis de usuário
### 🟡 Sprint 08 — Finalização
- Documentação Swagger
- Refatoração
- Deploy

## 📌 Status do Projeto

### 🚧 Em desenvolvimento — Sprint 01 concluída

## 🎯 Objetivo

- Criar um sistema hospitalar completo, simulando um ambiente real de Prontuário Eletrônico do Paciente (PEP), com foco em:

- Arquitetura limpa
- Escalabilidade
- Boas práticas de desenvolvimento
### 👨‍💻 Autor

- Felipe Silva Costa

### ⭐ Contribuição

- Sinta-se livre para contribuir com melhorias, sugestões ou abrir issues.

## 📄 Licença

- Este projeto está sob a licença MIT.

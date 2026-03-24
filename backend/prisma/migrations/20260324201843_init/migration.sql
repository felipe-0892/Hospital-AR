-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMININO', 'OUTRO');

-- CreateEnum
CREATE TYPE "TipoSanguineo" AS ENUM ('A_POSITIVO', 'A_NEGATIVO', 'B_POSITIVO', 'B_NEGATIVO', 'AB_POSITIVO', 'AB_NEGATIVO', 'O_POSITIVO', 'O_NEGATIVO');

-- CreateEnum
CREATE TYPE "StatusConsulta" AS ENUM ('AGENDADA', 'CONFIRMADA', 'EM_ATENDIMENTO', 'FINALIZADA', 'CANCELADA', 'NAO_COMPARECEU');

-- CreateEnum
CREATE TYPE "TipoConsulta" AS ENUM ('CONSULTA', 'RETORNO', 'EMERGENCIA');

-- CreateEnum
CREATE TYPE "TipoExame" AS ENUM ('SANGUE', 'URINA', 'RAIO_X', 'TOMOGRAFIA', 'ULTRASSOM', 'RESSONANCIA');

-- CreateEnum
CREATE TYPE "StatusInternacao" AS ENUM ('ATIVA', 'ALTA');

-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'MEDICO', 'ENFERMEIRO', 'RECEPCIONISTA');

-- CreateEnum
CREATE TYPE "StatusLeito" AS ENUM ('LIVRE', 'OCUPADO', 'MANUTENCAO');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" "TipoUsuario" NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "genero" "Genero" NOT NULL,
    "tipoSanguineo" "TipoSanguineo",
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "endereco" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidades" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "especialidadeId" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "dataAgendada" TIMESTAMP(3) NOT NULL,
    "tipo" "TipoConsulta" NOT NULL,
    "status" "StatusConsulta" NOT NULL,
    "motivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prontuarios" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "alergias" TEXT,
    "observacoes" TEXT,

    CONSTRAINT "prontuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evolucoes_medicas" (
    "id" TEXT NOT NULL,
    "prontuarioId" TEXT NOT NULL,
    "consultaId" TEXT NOT NULL,
    "anamnese" TEXT,
    "diagnostico" TEXT,

    CONSTRAINT "evolucoes_medicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "triagens" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "temperatura" DOUBLE PRECISION,
    "pressao" TEXT,
    "saturacao" DOUBLE PRECISION,
    "sintomas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "triagens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exames" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "consultaId" TEXT,
    "tipo" "TipoExame" NOT NULL,
    "descricao" TEXT,
    "resultado" TEXT,

    CONSTRAINT "exames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receitas" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "consultaId" TEXT,
    "medicamento" TEXT NOT NULL,
    "dosagem" TEXT NOT NULL,

    CONSTRAINT "receitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_medicamentos" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "receitaId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3),

    CONSTRAINT "historico_medicamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leitos" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "status" "StatusLeito" NOT NULL DEFAULT 'LIVRE',

    CONSTRAINT "leitos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internacoes" (
    "id" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "medicoId" TEXT NOT NULL,
    "leitoId" TEXT,
    "motivo" TEXT NOT NULL,
    "status" "StatusInternacao" NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "dataAlta" TIMESTAMP(3),

    CONSTRAINT "internacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "especialidades_nome_key" ON "especialidades"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_crm_key" ON "medicos"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "prontuarios_pacienteId_key" ON "prontuarios"("pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "evolucoes_medicas_consultaId_key" ON "evolucoes_medicas"("consultaId");

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_especialidadeId_fkey" FOREIGN KEY ("especialidadeId") REFERENCES "especialidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prontuarios" ADD CONSTRAINT "prontuarios_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolucoes_medicas" ADD CONSTRAINT "evolucoes_medicas_prontuarioId_fkey" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolucoes_medicas" ADD CONSTRAINT "evolucoes_medicas_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "consultas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "triagens" ADD CONSTRAINT "triagens_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames" ADD CONSTRAINT "exames_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames" ADD CONSTRAINT "exames_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames" ADD CONSTRAINT "exames_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "consultas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas" ADD CONSTRAINT "receitas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas" ADD CONSTRAINT "receitas_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas" ADD CONSTRAINT "receitas_consultaId_fkey" FOREIGN KEY ("consultaId") REFERENCES "consultas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_medicamentos" ADD CONSTRAINT "historico_medicamentos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_medicamentos" ADD CONSTRAINT "historico_medicamentos_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internacoes" ADD CONSTRAINT "internacoes_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internacoes" ADD CONSTRAINT "internacoes_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internacoes" ADD CONSTRAINT "internacoes_leitoId_fkey" FOREIGN KEY ("leitoId") REFERENCES "leitos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

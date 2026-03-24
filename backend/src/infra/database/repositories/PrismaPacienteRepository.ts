import { IPacienteRepository, CreatePacienteDTO } from "../../../domain/repositories/IPacienteRepository";
import { PacienteEntity } from "../../../domain/entities/Paciente";
import prisma from "../../prismaClient";

export class PrismaPacienteRepository implements IPacienteRepository {
  async criar(data: CreatePacienteDTO): Promise<PacienteEntity> {
    return prisma.paciente.create({ data: data as any });
  }

  async listar(): Promise<PacienteEntity[]> {
    return prisma.paciente.findMany({ orderBy: { createdAt: "desc" } });
  }

  async buscarPorId(id: string): Promise<PacienteEntity | null> {
    return prisma.paciente.findUnique({ where: { id } });
  }

  async buscarPorCpf(cpf: string): Promise<PacienteEntity | null> {
    return prisma.paciente.findUnique({ where: { cpf } });
  }

  async atualizar(id: string, data: Partial<CreatePacienteDTO>): Promise<PacienteEntity> {
    return prisma.paciente.update({ where: { id }, data: data as any });
  }

  async deletar(id: string): Promise<void> {
    await prisma.paciente.delete({ where: { id } });
  }
}
import { IConsultaRepository, CreateConsultaDTO } from "../../../domain/repositories/IConsultaRepository";
import { ConsultaEntity } from "../../../domain/entities/Consulta";
import prisma from "../../prismaClient";

export class PrismaConsultaRepository implements IConsultaRepository {
  async criar(data: CreateConsultaDTO): Promise<ConsultaEntity> {
    return prisma.consulta.create({ data: data as any });
  }

  async listar(): Promise<ConsultaEntity[]> {
    return prisma.consulta.findMany({
      orderBy: { createdAt: "desc" },
      include: { paciente: true, medico: true },
    });
  }

  async buscarPorId(id: string): Promise<ConsultaEntity | null> {
    return prisma.consulta.findUnique({
      where: { id },
      include: { paciente: true, medico: true, evolucao: true },
    });
  }

  async listarPorPaciente(pacienteId: string): Promise<ConsultaEntity[]> {
    return prisma.consulta.findMany({
      where: { pacienteId },
      orderBy: { dataAgendada: "desc" },
      include: { medico: true },
    });
  }

  async listarPorMedico(medicoId: string): Promise<ConsultaEntity[]> {
    return prisma.consulta.findMany({
      where: { medicoId },
      orderBy: { dataAgendada: "desc" },
      include: { paciente: true },
    });
  }

  async atualizar(id: string, data: Partial<CreateConsultaDTO>): Promise<ConsultaEntity> {
    return prisma.consulta.update({ where: { id }, data: data as any });
  }

  async deletar(id: string): Promise<void> {
    await prisma.consulta.delete({ where: { id } });
  }
}
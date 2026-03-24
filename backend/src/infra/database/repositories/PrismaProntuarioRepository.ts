import { IProntuarioRepository, CreateProntuarioDTO } from "../../../domain/repositories/IProntuarioRepository";
import { ProntuarioEntity } from "../../../domain/entities/Prontuario";
import prisma from "../../prismaClient";

export class PrismaProntuarioRepository implements IProntuarioRepository {
  async criar(data: CreateProntuarioDTO): Promise<ProntuarioEntity> {
    return prisma.prontuario.create({ data });
  }

  async buscarPorPaciente(pacienteId: string): Promise<ProntuarioEntity | null> {
    return prisma.prontuario.findUnique({
      where: { pacienteId },
      include: { evolucoes: { include: { consulta: true } } },
    });
  }

  async buscarPorId(id: string): Promise<ProntuarioEntity | null> {
    return prisma.prontuario.findUnique({
      where: { id },
      include: { evolucoes: true },
    });
  }

  async atualizar(id: string, data: Partial<CreateProntuarioDTO>): Promise<ProntuarioEntity> {
    return prisma.prontuario.update({ where: { id }, data });
  }
}
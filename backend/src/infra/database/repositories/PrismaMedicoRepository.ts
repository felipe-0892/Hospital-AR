import { IMedicoRepository, CreateMedicoDTO } from "../../../domain/repositories/IMedicoRepository";
import { MedicoEntity } from "../../../domain/entities/Medico";
import prisma from "../../prismaClient";

export class PrismaMedicoRepository implements IMedicoRepository {
  async criar(data: CreateMedicoDTO): Promise<MedicoEntity> {
    return prisma.medico.create({ data });
  }

  async listar(): Promise<MedicoEntity[]> {
    return prisma.medico.findMany({
      orderBy: { createdAt: "desc" },
      include: { especialidade: true },
    });
  }

  async buscarPorId(id: string): Promise<MedicoEntity | null> {
    return prisma.medico.findUnique({
      where: { id },
      include: { especialidade: true },
    });
  }

  async buscarPorCrm(crm: string): Promise<MedicoEntity | null> {
    return prisma.medico.findUnique({ where: { crm } });
  }

  async atualizar(id: string, data: Partial<CreateMedicoDTO>): Promise<MedicoEntity> {
    return prisma.medico.update({ where: { id }, data });
  }

  async deletar(id: string): Promise<void> {
    await prisma.medico.delete({ where: { id } });
  }
}
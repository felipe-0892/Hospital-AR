import { MedicoEntity } from "../entities/Medico";

export interface CreateMedicoDTO {
  nomeCompleto: string;
  crm: string;
  especialidadeId: string;
  telefone: string;
  email: string;
}

export interface IMedicoRepository {
  criar(data: CreateMedicoDTO): Promise<MedicoEntity>;
  listar(): Promise<MedicoEntity[]>;
  buscarPorId(id: string): Promise<MedicoEntity | null>;
  buscarPorCrm(crm: string): Promise<MedicoEntity | null>;
  atualizar(id: string, data: Partial<CreateMedicoDTO>): Promise<MedicoEntity>;
  deletar(id: string): Promise<void>;
}
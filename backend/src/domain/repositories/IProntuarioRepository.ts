import { ProntuarioEntity } from "../entities/Prontuario";

export interface CreateProntuarioDTO {
  pacienteId: string;
  alergias?: string;
  observacoes?: string;
}

export interface IProntuarioRepository {
  criar(data: CreateProntuarioDTO): Promise<ProntuarioEntity>;
  buscarPorPaciente(pacienteId: string): Promise<ProntuarioEntity | null>;
  buscarPorId(id: string): Promise<ProntuarioEntity | null>;
  atualizar(id: string, data: Partial<CreateProntuarioDTO>): Promise<ProntuarioEntity>;
}
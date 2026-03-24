import { ConsultaEntity } from "../entities/Consulta";

export interface CreateConsultaDTO {
  pacienteId: string;
  medicoId: string;
  dataAgendada: Date;
  tipo: string;
  status: string;
  motivo?: string;
}

export interface IConsultaRepository {
  criar(data: CreateConsultaDTO): Promise<ConsultaEntity>;
  listar(): Promise<ConsultaEntity[]>;
  buscarPorId(id: string): Promise<ConsultaEntity | null>;
  listarPorPaciente(pacienteId: string): Promise<ConsultaEntity[]>;
  listarPorMedico(medicoId: string): Promise<ConsultaEntity[]>;
  atualizar(id: string, data: Partial<CreateConsultaDTO>): Promise<ConsultaEntity>;
  deletar(id: string): Promise<void>;
}
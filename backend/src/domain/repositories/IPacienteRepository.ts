import { PacienteEntity } from "../entities/Paciente";

export interface CreatePacienteDTO {
  nomeCompleto: string;
  cpf: string;
  dataNascimento: Date;
  genero: string;
  tipoSanguineo?: string;
  telefone: string;
  email?: string;
  endereco?: string;
}

export interface IPacienteRepository {
  criar(data: CreatePacienteDTO): Promise<PacienteEntity>;
  listar(): Promise<PacienteEntity[]>;
  buscarPorId(id: string): Promise<PacienteEntity | null>;
  buscarPorCpf(cpf: string): Promise<PacienteEntity | null>;
  atualizar(id: string, data: Partial<CreatePacienteDTO>): Promise<PacienteEntity>;
  deletar(id: string): Promise<void>;
}
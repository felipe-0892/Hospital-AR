export interface PacienteEntity {
  id: string;
  nomeCompleto: string;
  cpf: string;
  dataNascimento: Date;
  genero: string;
  tipoSanguineo?: string | null;
  telefone: string;
  email?: string | null;
  endereco?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
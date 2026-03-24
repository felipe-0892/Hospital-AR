export interface MedicoEntity {
  id: string;
  nomeCompleto: string;
  crm: string;
  especialidadeId: string;
  telefone: string;
  email: string;
  ativo: boolean;
  createdAt: Date;
}
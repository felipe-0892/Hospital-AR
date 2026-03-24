export interface ConsultaEntity {
  id: string;
  pacienteId: string;
  medicoId: string;
  dataAgendada: Date;
  tipo: string;
  status: string;
  motivo?: string | null;
  createdAt: Date;
}
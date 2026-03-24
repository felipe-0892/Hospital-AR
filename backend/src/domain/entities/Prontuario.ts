export interface ProntuarioEntity {
  id: string;
  pacienteId: string;
  alergias?: string | null;
  observacoes?: string | null;
}
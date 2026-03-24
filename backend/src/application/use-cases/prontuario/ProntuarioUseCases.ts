import { IProntuarioRepository, CreateProntuarioDTO } from "../../../domain/repositories/IProntuarioRepository";
import { AppError } from "../../../shared/errors/AppError";

export class CriarProntuarioUseCase {
  constructor(private prontuarioRepository: IProntuarioRepository) {}

  async execute(data: CreateProntuarioDTO) {
    const jaExiste = await this.prontuarioRepository.buscarPorPaciente(data.pacienteId);
    if (jaExiste) throw new AppError("Paciente já possui prontuário.", 409);
    return this.prontuarioRepository.criar(data);
  }
}

export class BuscarProntuarioPorPacienteUseCase {
  constructor(private prontuarioRepository: IProntuarioRepository) {}

  async execute(pacienteId: string) {
    const prontuario = await this.prontuarioRepository.buscarPorPaciente(pacienteId);
    if (!prontuario) throw new AppError("Prontuário não encontrado.", 404);
    return prontuario;
  }
}

export class AtualizarProntuarioUseCase {
  constructor(private prontuarioRepository: IProntuarioRepository) {}

  async execute(id: string, data: Partial<CreateProntuarioDTO>) {
    const prontuario = await this.prontuarioRepository.buscarPorId(id);
    if (!prontuario) throw new AppError("Prontuário não encontrado.", 404);
    return this.prontuarioRepository.atualizar(id, data);
  }
}
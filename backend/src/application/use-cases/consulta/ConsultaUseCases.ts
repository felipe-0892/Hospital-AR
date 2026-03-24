import { IConsultaRepository, CreateConsultaDTO } from "../../../domain/repositories/IConsultaRepository";
import { AppError } from "../../../shared/errors/AppError";

export class CriarConsultaUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute(data: CreateConsultaDTO) {
    return this.consultaRepository.criar(data);
  }
}

export class ListarConsultasUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute() {
    return this.consultaRepository.listar();
  }
}

export class BuscarConsultaUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute(id: string) {
    const consulta = await this.consultaRepository.buscarPorId(id);
    if (!consulta) throw new AppError("Consulta não encontrada.", 404);
    return consulta;
  }
}

export class ListarConsultasPorPacienteUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute(pacienteId: string) {
    return this.consultaRepository.listarPorPaciente(pacienteId);
  }
}

export class AtualizarStatusConsultaUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute(id: string, data: Partial<CreateConsultaDTO>) {
    const consulta = await this.consultaRepository.buscarPorId(id);
    if (!consulta) throw new AppError("Consulta não encontrada.", 404);
    return this.consultaRepository.atualizar(id, data);
  }
}

export class DeletarConsultaUseCase {
  constructor(private consultaRepository: IConsultaRepository) {}

  async execute(id: string) {
    const consulta = await this.consultaRepository.buscarPorId(id);
    if (!consulta) throw new AppError("Consulta não encontrada.", 404);
    await this.consultaRepository.deletar(id);
  }
}
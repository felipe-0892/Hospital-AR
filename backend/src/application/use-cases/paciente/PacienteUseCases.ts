import { IPacienteRepository, CreatePacienteDTO } from "../../../domain/repositories/IPacienteRepository";
import { AppError } from "../../../shared/errors/AppError";

export class CriarPacienteUseCase {
  constructor(private pacienteRepository: IPacienteRepository) {}

  async execute(data: CreatePacienteDTO) {
    const jaExiste = await this.pacienteRepository.buscarPorCpf(data.cpf);
    if (jaExiste) throw new AppError("CPF já cadastrado.", 409);
    return this.pacienteRepository.criar(data);
  }
}

export class ListarPacientesUseCase {
  constructor(private pacienteRepository: IPacienteRepository) {}

  async execute() {
    return this.pacienteRepository.listar();
  }
}

export class BuscarPacienteUseCase {
  constructor(private pacienteRepository: IPacienteRepository) {}

  async execute(id: string) {
    const paciente = await this.pacienteRepository.buscarPorId(id);
    if (!paciente) throw new AppError("Paciente não encontrado.", 404);
    return paciente;
  }
}

export class AtualizarPacienteUseCase {
  constructor(private pacienteRepository: IPacienteRepository) {}

  async execute(id: string, data: Partial<CreatePacienteDTO>) {
    const paciente = await this.pacienteRepository.buscarPorId(id);
    if (!paciente) throw new AppError("Paciente não encontrado.", 404);
    return this.pacienteRepository.atualizar(id, data);
  }
}

export class DeletarPacienteUseCase {
  constructor(private pacienteRepository: IPacienteRepository) {}

  async execute(id: string) {
    const paciente = await this.pacienteRepository.buscarPorId(id);
    if (!paciente) throw new AppError("Paciente não encontrado.", 404);
    await this.pacienteRepository.deletar(id);
  }
}
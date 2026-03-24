import { IMedicoRepository, CreateMedicoDTO } from "../../../domain/repositories/IMedicoRepository";
import { AppError } from "../../../shared/errors/AppError";

export class CriarMedicoUseCase {
  constructor(private medicoRepository: IMedicoRepository) {}

  async execute(data: CreateMedicoDTO) {
    const jaExiste = await this.medicoRepository.buscarPorCrm(data.crm);
    if (jaExiste) throw new AppError("CRM já cadastrado.", 409);
    return this.medicoRepository.criar(data);
  }
}

export class ListarMedicosUseCase {
  constructor(private medicoRepository: IMedicoRepository) {}

  async execute() {
    return this.medicoRepository.listar();
  }
}

export class BuscarMedicoUseCase {
  constructor(private medicoRepository: IMedicoRepository) {}

  async execute(id: string) {
    const medico = await this.medicoRepository.buscarPorId(id);
    if (!medico) throw new AppError("Médico não encontrado.", 404);
    return medico;
  }
}

export class AtualizarMedicoUseCase {
  constructor(private medicoRepository: IMedicoRepository) {}

  async execute(id: string, data: Partial<CreateMedicoDTO>) {
    const medico = await this.medicoRepository.buscarPorId(id);
    if (!medico) throw new AppError("Médico não encontrado.", 404);
    return this.medicoRepository.atualizar(id, data);
  }
}

export class DeletarMedicoUseCase {
  constructor(private medicoRepository: IMedicoRepository) {}

  async execute(id: string) {
    const medico = await this.medicoRepository.buscarPorId(id);
    if (!medico) throw new AppError("Médico não encontrado.", 404);
    await this.medicoRepository.deletar(id);
  }
}
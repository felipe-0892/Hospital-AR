import { Request, Response } from "express";
import { PrismaPacienteRepository } from "../../database/repositories/PrismaPacienteRepository";
import {
  CriarPacienteUseCase,
  ListarPacientesUseCase,
  BuscarPacienteUseCase,
  AtualizarPacienteUseCase,
  DeletarPacienteUseCase,
} from "../../../application/use-cases/paciente/PacienteUseCases";
import { AppError } from "../../../shared/errors/AppError";

const repo = new PrismaPacienteRepository();

export class PacienteController {
  async criar(req: Request, res: Response) {
    try {
      const useCase = new CriarPacienteUseCase(repo);
      const paciente = await useCase.execute(req.body);
      return res.status(201).json(paciente);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const useCase = new ListarPacientesUseCase(repo);
      const pacientes = await useCase.execute();
      return res.json(pacientes);
    } catch {
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async buscar(req: Request, res: Response) {
    try {
      const useCase = new BuscarPacienteUseCase(repo);
      const paciente = await useCase.execute(req.params.id);
      return res.json(paciente);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const useCase = new AtualizarPacienteUseCase(repo);
      const paciente = await useCase.execute(req.params.id, req.body);
      return res.json(paciente);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const useCase = new DeletarPacienteUseCase(repo);
      await useCase.execute(req.params.id);
      return res.status(204).send();
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}
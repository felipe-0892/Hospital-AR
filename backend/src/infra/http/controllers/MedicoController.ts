import { Request, Response } from "express";
import { PrismaMedicoRepository } from "../../database/repositories/PrismaMedicoRepository";
import {
  CriarMedicoUseCase,
  ListarMedicosUseCase,
  BuscarMedicoUseCase,
  AtualizarMedicoUseCase,
  DeletarMedicoUseCase,
} from "../../../application/use-cases/medico/MedicosUseCases";
import { AppError } from "../../../shared/errors/AppError";

const repo = new PrismaMedicoRepository();

export class MedicoController {
  async criar(req: Request, res: Response) {
    try {
      const useCase = new CriarMedicoUseCase(repo);
      const medico = await useCase.execute(req.body);
      return res.status(201).json(medico);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const useCase = new ListarMedicosUseCase(repo);
      const medicos = await useCase.execute();
      return res.json(medicos);
    } catch {
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async buscar(req: Request, res: Response) {
    try {
      const useCase = new BuscarMedicoUseCase(repo);
      const medico = await useCase.execute(req.params.id);
      return res.json(medico);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const useCase = new AtualizarMedicoUseCase(repo);
      const medico = await useCase.execute(req.params.id, req.body);
      return res.json(medico);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const useCase = new DeletarMedicoUseCase(repo);
      await useCase.execute(req.params.id);
      return res.status(204).send();
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}
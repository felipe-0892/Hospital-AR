import { Request, Response } from "express";
import { PrismaProntuarioRepository } from "../../database/repositories/PrismaProntuarioRepository";
import {
  CriarProntuarioUseCase,
  BuscarProntuarioPorPacienteUseCase,
  AtualizarProntuarioUseCase,
} from "../../../application/use-cases/prontuario/ProntuarioUseCases";
import { AppError } from "../../../shared/errors/AppError";

const repo = new PrismaProntuarioRepository();

export class ProntuarioController {
  async criar(req: Request, res: Response) {
    try {
      const useCase = new CriarProntuarioUseCase(repo);
      const prontuario = await useCase.execute(req.body);
      return res.status(201).json(prontuario);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async buscarPorPaciente(req: Request, res: Response) {
    try {
      const useCase = new BuscarProntuarioPorPacienteUseCase(repo);
      const prontuario = await useCase.execute(req.params.pacienteId);
      return res.json(prontuario);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const useCase = new AtualizarProntuarioUseCase(repo);
      const prontuario = await useCase.execute(req.params.id, req.body);
      return res.json(prontuario);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}
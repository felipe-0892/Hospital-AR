import { Request, Response } from "express";
import { PrismaConsultaRepository } from "../../database/repositories/PrismaConsultaRepository";
import {
  CriarConsultaUseCase,
  ListarConsultasUseCase,
  BuscarConsultaUseCase,
  ListarConsultasPorPacienteUseCase,
  AtualizarStatusConsultaUseCase,
  DeletarConsultaUseCase,
} from "../../../application/use-cases/consulta/ConsultaUseCases";
import { AppError } from "../../../shared/errors/AppError";

const repo = new PrismaConsultaRepository();

export class ConsultaController {
  async criar(req: Request, res: Response) {
    try {
      const useCase = new CriarConsultaUseCase(repo);
      const consulta = await useCase.execute(req.body);
      return res.status(201).json(consulta);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const useCase = new ListarConsultasUseCase(repo);
      const consultas = await useCase.execute();
      return res.json(consultas);
    } catch {
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async buscar(req: Request, res: Response) {
    try {
      const useCase = new BuscarConsultaUseCase(repo);
      const consulta = await useCase.execute(req.params.id);
      return res.json(consulta);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async listarPorPaciente(req: Request, res: Response) {
    try {
      const useCase = new ListarConsultasPorPacienteUseCase(repo);
      const consultas = await useCase.execute(req.params.pacienteId);
      return res.json(consultas);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const useCase = new AtualizarStatusConsultaUseCase(repo);
      const consulta = await useCase.execute(req.params.id, req.body);
      return res.json(consulta);
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const useCase = new DeletarConsultaUseCase(repo);
      await useCase.execute(req.params.id);
      return res.status(204).send();
    } catch (err) {
      if (err instanceof AppError)
        return res.status(err.statusCode).json({ error: err.message });
      return res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}
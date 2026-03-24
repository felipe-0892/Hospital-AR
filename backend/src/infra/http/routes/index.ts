import { Router } from "express";
import { PacienteController } from "../controllers/PacienteController";
import { MedicoController } from "../controllers/MedicoController";
import { ConsultaController } from "../controllers/ConsultaController";
import { ProntuarioController } from "../controllers/ProntuarioController";

const router = Router();

const pacienteController = new PacienteController();
const medicoController = new MedicoController();
const consultaController = new ConsultaController();
const prontuarioController = new ProntuarioController();

// ── Pacientes ──────────────────────────────────────────────
router.post("/pacientes", (req, res) => pacienteController.criar(req, res));
router.get("/pacientes", (req, res) => pacienteController.listar(req, res));
router.get("/pacientes/:id", (req, res) => pacienteController.buscar(req, res));
router.put("/pacientes/:id", (req, res) => pacienteController.atualizar(req, res));
router.delete("/pacientes/:id", (req, res) => pacienteController.deletar(req, res));

// ── Médicos ────────────────────────────────────────────────
router.post("/medicos", (req, res) => medicoController.criar(req, res));
router.get("/medicos", (req, res) => medicoController.listar(req, res));
router.get("/medicos/:id", (req, res) => medicoController.buscar(req, res));
router.put("/medicos/:id", (req, res) => medicoController.atualizar(req, res));
router.delete("/medicos/:id", (req, res) => medicoController.deletar(req, res));

// ── Consultas ──────────────────────────────────────────────
router.post("/consultas", (req, res) => consultaController.criar(req, res));
router.get("/consultas", (req, res) => consultaController.listar(req, res));
router.get("/consultas/:id", (req, res) => consultaController.buscar(req, res));
router.get("/consultas/paciente/:pacienteId", (req, res) => consultaController.listarPorPaciente(req, res));
router.put("/consultas/:id", (req, res) => consultaController.atualizar(req, res));
router.delete("/consultas/:id", (req, res) => consultaController.deletar(req, res));

// ── Prontuário ─────────────────────────────────────────────
router.post("/prontuarios", (req, res) => prontuarioController.criar(req, res));
router.get("/prontuarios/paciente/:pacienteId", (req, res) => prontuarioController.buscarPorPaciente(req, res));
router.put("/prontuarios/:id", (req, res) => prontuarioController.atualizar(req, res));

export default router;
import express from "express";
import dotenv from "dotenv";
import routes from "./infra/http/routes";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./infra/http/docs/Swagger";

dotenv.config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

// ── Rotas ──────────────────────────────────────────────────
app.use("/api", routes);

// ── Health check ───────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "API Hospital-AR funcionando 🚀" });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponíveis em: http://localhost:${PORT}/api`);
});
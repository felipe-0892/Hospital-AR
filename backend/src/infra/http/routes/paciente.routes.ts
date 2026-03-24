import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hospital-AR API",
      version: "1.0.0",
      description: "Sistema Hospitalar com Prontuário Eletrônico",
    },
    servers: [
      {
        url: "http://localhost:3005",
      },
    ],
    components: {
      schemas: {

        Paciente: {
          type: "object",
          required: ["fullName", "cpf", "birthDate", "gender", "phone"],
          properties: {
            id: { type: "string", example: "uuid" },
            fullName: { type: "string", example: "João Silva" },
            cpf: { type: "string", example: "12345678900" },
            birthDate: { type: "string", example: "1990-01-01" },
            gender: { type: "string", example: "MALE" },
            phone: { type: "string", example: "79999999999" },
            email: { type: "string", example: "joao@email.com" },
            address: { type: "string", example: "Rua A, 123" },
          },
        },

        Medico: {
          type: "object",
          required: ["fullName", "crm", "specialtyId"],
          properties: {
            id: { type: "string", example: "uuid" },
            fullName: { type: "string", example: "Dr. Carlos" },
            crm: { type: "string", example: "CRM12345" },
            specialtyId: { type: "string", example: "uuid" },
            phone: { type: "string", example: "79999999999" },
            email: { type: "string", example: "medico@email.com" },
          },
        },

        Consulta: {
          type: "object",
          required: ["patientId", "doctorId", "scheduledAt"],
          properties: {
            id: { type: "string", example: "uuid" },
            patientId: { type: "string", example: "uuid" },
            doctorId: { type: "string", example: "uuid" },
            scheduledAt: { type: "string", example: "2026-03-25T10:00:00Z" },
            status: { type: "string", example: "SCHEDULED" },
            reason: { type: "string", example: "Dor de cabeça" },
          },
        },

        Prontuario: {
          type: "object",
          properties: {
            id: { type: "string", example: "uuid" },
            patientId: { type: "string", example: "uuid" },
            allergies: { type: "string", example: "Dipirona" },
            chronicConditions: { type: "string", example: "Hipertensão" },
            medications: { type: "string", example: "Losartana" },
          },
        },

      },
    },
  },

  apis: ["./src/infra/http/routes/*.ts"],
});
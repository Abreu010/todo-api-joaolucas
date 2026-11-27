// ROTA: recebe a requisicao HTTP e chama o controller.

const express = require("express");
const tarefaController = require("../controllers/tarefaController");
const validarId = require("../middlewares/validarId");

const router = express.Router();

router.get("/", tarefaController.listar);

router.patch("/:id", validarId, tarefaController.atualizarParcial);

router.post("/", tarefaController.criar);

router.delete("/:id", validarId, tarefaController.deletar);

module.exports = router;

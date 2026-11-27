// CONTROLLER: recebe da rota, chama o service e devolve a resposta.

const tarefaService = require("../services/tarefaService");

async function listar(req, res) {
const tarefas = await tarefaService.listarTarefas(req.query);
res.status(____).json(tarefas);
}

module.exports = {listar};

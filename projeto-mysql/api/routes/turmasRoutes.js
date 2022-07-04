const { Router } = require("express");
const  TurmaController = require("../controllers/TurmaController.js");

const turmaRouter = Router();

turmaRouter
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id/matriculas', TurmaController.pegaPessoasDeUmaTurma)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .post('/turmas', TurmaController.criaTurma)
    .put('/turmas/:id', TurmaController.atualizaTurma)
    .delete('/turmas/:id', TurmaController.apagaTurma)

module.exports = turmaRouter;
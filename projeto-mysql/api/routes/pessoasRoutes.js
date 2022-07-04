const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const pessoaRouter = Router();

pessoaRouter
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
    .get('/pessoas/:id/matriculas/:id2', PessoaController.pegarUmaMatricula)
    .get('/pessoas/:id/matriculas', PessoaController.pegarTodasAsMatriculas)
    .get('/pessoas/:id', PessoaController.pegarUmaPessoa)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .post('/pessoas/:id/cancelado', PessoaController.cancelarPessoa)
    .post('/pessoas/:id/ativado', PessoaController.ativarPessoa)
    .post('/pessoas/:id/matriculas', PessoaController.criarUmaMatricula)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .put('/pessoas/:id/matriculas/:id2', PessoaController.atualizarMatricula)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .delete('/pessoas/:id/matriculas/:id2', PessoaController.excluirMatricula)
    .delete('/pessoas/:id', PessoaController.excluirPessoa)

module.exports = pessoaRouter;
const {Router} = require("express");
const NivelController = require("../controllers/NivelController.js");

const nivelRouter = Router();

nivelRouter
    .get('/niveis', NivelController.pegaTodosOsNiveis)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .post('/niveis', NivelController.criaNivel)
    .put('/niveis/:id', NivelController.atualizaNivel)
    .delete('/niveis/:id', NivelController.apagaNivel)

module.exports = nivelRouter;
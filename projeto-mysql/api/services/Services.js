const database = require("../models");

class Services {
    constructor(modelo) {
        this.modelo = modelo;
    }

    async pegarRegistros(where = {}) {
        return database[this.modelo].findAll({ where: { ...where } });
    }

    async agruparRegistros(where = {}) {
        return database[this.modelo].findAndCountAll({ where: { ...where } });
    }

    async pegarRegistro(where = {}) {
        return database[this.modelo].findOne({ where: { ...where } });
    }

    async criarRegistro(dados) {
        return database[this.modelo].create(dados);
    }

    async atualizaRegistro(dados, where = {}) {
        return database[this.modelo].update(dados, { where: { ...where } });
    }

    async apagarRegistro(where = {}) {
        return database[this.modelo].destroy({ where: { ...where } })
    }
}

module.exports = Services;
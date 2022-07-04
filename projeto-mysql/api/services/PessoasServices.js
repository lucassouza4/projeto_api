const Services = require('./Services');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas'),
        this.matricula = new Services('Matriculas')
    }

    async pegarPessoas(escopo) {
        return database[this.modelo].scope(escopo).findAll()
    }

    async restaurarPessoa(where = {}) {
        return database[this.modelo].restore({ where: { ...where } })
    }
}

module.exports = PessoasServices;
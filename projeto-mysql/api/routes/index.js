const bodyParser = require("body-parser");
const pessoa = require("./pessoasRoutes.js");
const turma = require("./turmasRoutes.js");
const nivel = require("./niveisRoutes.js");

const routes = (app) =>{
    app.use(
        bodyParser.json(),
        pessoa,
        turma,
        nivel);
}

module.exports = routes;
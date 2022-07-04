import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());

const app2 = express();
app2.use(express.static('./src/upload-arquivo/public'));

routes(app,app2);

export {app,app2};
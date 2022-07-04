import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import autoresUpload from './livrosUploadRoutes.js';



const routes = (app,app2) =>{
    app.route('/').get((req, res) => {res.status(200).send("Curso de node")});

    app.use(
        express.json(),
        livros,
        autores
    )
    app2.use(
        express.json(),
        autoresUpload
    )
}

export default routes;
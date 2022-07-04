import autores from "../models/Autor.js";

class AutorController{
    static listarAutores = (req,res) =>{
        autores.find((err, autores) => { res.status(200).json(autores)});
    }

    static listarAutor = (req,res) => {
        const id = req.params.id;
        autores.findById(id,(err,autor) =>{
            if(err){
                res.status(400).send({message:`${err.message} - falha ao encontrar id do autor.`})
            }
            else{
                res.status(200).send(autor);
            }
        })
    }

    static cadastrarAutor = (req,res) =>{
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar autor.`})
            }
            else{
                res.status(201).send(autor);
            }
        })
    }

    static atualizarAutor = (req,res) =>{
        const id = req.params.id;

        autores.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao atualizar autor.`})
            }
            else{
                res.status(200).send({message:'Autor atualizado'});
            }
        });
    }

    static excluirAutor = (req,res) =>{
        const id = req.params.id;
        autores.findByIdAndDelete(id,(err) =>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao excluir autor.`})
            }
            else{
                res.status(200).send({message:'Autor excluido'});
            }
        })
    }
}

export default AutorController;
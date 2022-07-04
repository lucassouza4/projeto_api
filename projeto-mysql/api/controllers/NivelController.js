const Services = require("../services/Services");

const nivelServices = new Services('Niveis');

class NivelController{
    static async pegaTodosOsNiveis(req,res){
        try {
            const niveis = await nivelServices.pegarRegistros();
            return res.status(200).json(niveis);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async pegaUmNivel(req,res){
        const {id} = req.params;
        try {
            const nivel = await database.Niveis.findOne({
                where:{
                    id:Number(id)
                }
            });
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async criaNivel(req,res){
        const data = req.body;
        try {
            const nivel = await database.Niveis.create(data);
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async atualizaNivel(req,res){
        const data = req.body;
        const {id} = req.params;
        try {
            await database.Niveis.update(data,{
                where:{
                    id:Number(id)
                }
            });
            const nivel = await database.Niveis.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async apagaNivel(req,res){
        const {id} = req.params;
        try {
            await database.Niveis.destroy({
                where:{
                    id:Number(id)
                }
            });
            return res.status(200).send({message:`id ${id} removido`});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = NivelController
const Services = require("../services/Services");

const turmaServices = new Services('Turmas');

class TurmaController{
    static async pegaTodasAsTurmas(req,res){
        const {data_inicial,data_final} = req.query;
        const where = {};
        
        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const turmas = await turmaServices.pegarRegistros(where);
            return res.status(200).json(turmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaTurma(req,res){
        const {id} = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where:{
                    id:Number(id)
                }
            });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req,res){
        const data = req.body;
        try {
            const turma = await database.Turmas.create(data);
            return res.status(201).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaTurma(req,res){
        const data = req.body;
        const {id} = req.params;
        try {
            await database.Turmas.update(data,{
                where:{
                    id:Number(id)
                }
            });
            const turma = await database.Turmas.findOne({
                where:{
                    id:Number(id)
                }
            })
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaTurma(req,res){
        const {id} = req.params;
        try {
            const turmas = await database.Turmas.destroy({
                where:{
                    id:Number(id)
                }
            });
            return res.status(200).send({message:`id ${id} removido`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaPessoasDeUmaTurma(req,res){
        const {id} = req.params;
        try {
            let matriculas = await database.Matriculas.findAll({
                where:{
                    turma_id:Number(id),
                    status:'confirmado'
                }
            })

            let estudanteId = [];
            matriculas.forEach(element => {
                estudanteId.push(element.estudante_id);
            });
            
            let pessoas = await database.Pessoas.findAll({
                where:{
                    id:{
                        [Op.in]:estudanteId
                    }
                }
            });
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;
const { PessoasServices } = require("../services");

const pessoaServices = new PessoasServices;

class PessoaController {
    static async pegaTodasAsPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await pessoaServices.pegarRegistros();
            return res.status(200).json(pessoasAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await pessoaServices.pegarPessoas('todos');
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaPessoa(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await pessoaServices.pegarRegistro({ id: Number(id) });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastrarPessoa(req, res) {
        const dados = req.body;
        try {
            const novaPessoa = await pessoaServices.criarRegistro(dados);
            return res.status(201).json(novaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res) {
        const dados = req.body;
        const { id } = req.params;
        try {
            await pessoaServices.atualizaRegistro(dados, { id: Number(id) })
            const pessoaAtualizada = await pessoaServices.pegarRegistro({ id: Number(id) })
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluirPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoaServices.apagarRegistro(id);
            return res.status(200).send({ message: `id ${id} deletado !` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarTodasAsMatriculas(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await pessoaServices.pegarRegistros(id)
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarUmaMatricula(req, res) {
        const { id, id2 } = req.params;
        console.log(id, id2);
        try {
            const matricula = await pessoaServices.matricula.pegarRegistro({ id: Number(id2), estudante_id: Number(id) });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarUmaMatricula(req, res) {
        const lotacao = 4;

        const { id } = req.params;
        const dados = { ...req.body, estudante_id: Number(id) };
        try {
            const temVaga = await pessoaServices.matricula.agruparRegistros({ status: 'confirmado', turma_id: dados.turma_id })
            if (temVaga.count < lotacao) {
                try {
                    const novaMatricula = await pessoaServices.matricula.criarRegistro(dados);
                    return res.status(201).json(novaMatricula);
                } catch (error) {
                    return res.status(500).json(error.message);
                }
            }
            else {
                return res.status(400).json({ mensagem: "Turma cheia" });
            }

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res) {
        const dados = req.body;
        const { id, id2 } = req.params;
        try {
            await pessoaServices.matricula.atualizaRegistro(dados, { id: Number(id2), estudante_id: Number(id) })
            const matriculaAtualizada = await pessoaServices.matricula.pegarRegistro({ id: Number(id2) })
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async excluirMatricula(req, res) {
        const { id, id2 } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(id2),
                    estudante_id: Number(id)
                }
            })
            return res.status(200).send({ message: `id ${id2} deletado !` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoaServices.restaurarPessoa({id: Number(id)})
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cancelarPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoaServices.atualizaRegistro({ ativo: false }, { id: Number(id) });
            await pessoaServices.matricula.atualizaRegistro({ status: 'cancelado' }, { estudante_id: Number(id) })
            return res.status(200).json({ mensagem: `matriculas do id ${id} canceladas` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async ativarPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoaServices.atualizaRegistro({ ativo: true }, { id: Number(id) });
            await pessoaServices.matricula.atualizaRegistro({ status: 'confirmado' }, { estudante_id: Number(id) })
            return res.status(200).json({ mensagem: `matriculas do id ${id} confirmadas` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PessoaController;
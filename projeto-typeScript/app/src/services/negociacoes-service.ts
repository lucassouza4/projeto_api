import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:3002/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            });
    }
}
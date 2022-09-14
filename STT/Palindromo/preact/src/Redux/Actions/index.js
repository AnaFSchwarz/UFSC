import Types from "./Types"

const historicoRespostas = (itensAtualizados) => {
    return{
        type: HISTORICO,
        historico: itensAtualizados
    }
}

export default historicoRespostas;
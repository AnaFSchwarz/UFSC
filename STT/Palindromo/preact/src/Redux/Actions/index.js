import {ADDHISTORICO, REMOVE} from "../Types";

const historicoRespostas = {/*(itensAtualizados)*/
    add: historico => ({
        type: ADDHISTORICO,
        payload: historico
        //historico: itensAtualizados,//payload(dispatch){}
    }),
    remove: id => ({
        type: REMOVE,
        payload: id
    })
};

export default historicoRespostas;  

//export const historicoRespostas = createAction ('historico/addHistorico');
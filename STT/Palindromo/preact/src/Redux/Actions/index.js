import {ADDHISTORICO, REMOVE} from "../Types";

const historicoRespostas = {/*(itensAtualizados)*/
    add: historico => ({
        type: ADDHISTORICO,
        payload: historico
        //historico: itensAtualizados,//payload(dispatch){}
    }),
    remove: historico => ({
        type: REMOVE,
        payload: historico
    })
};

export default historicoRespostas;  

//export const historicoRespostas = createAction ('historico/addHistorico');
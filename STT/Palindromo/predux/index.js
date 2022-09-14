
const redux = require("redux");
const createStore = redux.createStore;

const HISTORICO = 'historico';
//actions
const historicoRespostas = (itensAtualizados) => {
    return{
        type: HISTORICO,
        historico: itensAtualizados
    }
}

const initialState = {
    historico: []
}

function historicoReducer (prevState = initialState, action) {
    if (action.type === HISTORICO){
        return {
            ...prevState,
            historico: [...prevState.historico, action.historico]
        }
    } else {
        return prevState
    }
}



const store = createStore(historicoReducer);
console.log('InitialState', store.getState())
store.dispatch(historicoRespostas("Hallo"))
console.log("New State", store.getState())

store.dispatch(historicoRespostas("Olá"))
console.log("New State", store.getState())
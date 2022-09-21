import { ADDHISTORICO, REMOVE } from './Types';
import {combineReducers } from 'redux';

//Reducer
const initialState = {
    historico: []
};
 
const index = (State = initialState, action) => {
    const { payload, type } = action
    const {historico} = State
    switch (type) {
        case ADDHISTORICO: 
            return {
            ...State,
            historico: [...State.historico, payload.historico /*action.historico*/]       } 
        case REMOVE:  
                return {...State, historico: historico.filter(resposta => resposta !== payload)}
        default: 
            return State
    }
}

export const Reducers = combineReducers({ index });
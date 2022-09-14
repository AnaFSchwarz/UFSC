import Types from './Types'
import { combineReducers } from 'redux';

const initialState = {
    historico: []
};

//Reducer
function index (prevState = initialState, action) {
    if (action.type === Types.HISTORUCO){
        return {
            ...prevState,
            historico: [...prevState.historico, action.historico]
        }
    } else {
        return prevState
    }
}

export const Reducers = combineReducers({ index });

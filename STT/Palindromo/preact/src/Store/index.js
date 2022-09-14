import {Reducers} from '../Redux'; //pesquisar quando usarchaves ou não
import {createStore, applyMiddleWare} from 'redux'; //entre action e reducers e adiciona no API (chamadas assincronas)
import thunk from 'redux-thunk';//bibiloteca

const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

export const Store = createStore(Reducers,applyMiddleWare(thunkMiddleware)); 
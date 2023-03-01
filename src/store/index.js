import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import axios from 'axios';
import thunk from'redux-thunk';

import rootReducer from "./root-reducer";
import * as api from "../config"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument({
    client: axios,
    api
}))));

export default store;
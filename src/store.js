import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';

import rootReducer from './reducers';

const INITIAL_STATE = {};
let store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(apiMiddleware));

export default store;

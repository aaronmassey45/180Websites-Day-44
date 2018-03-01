import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers';

const INITIAL_STATE = {};
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(ReduxPromise));

export default store;

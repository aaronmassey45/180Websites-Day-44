import {combineReducers} from 'redux';
import appState from './reducer_pokemon';

let rootReducer = combineReducers({
  appState
})

export default rootReducer;

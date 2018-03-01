import {combineReducers} from 'redux';
import pokeData from './reducer_pokemon';

let rootReducer = combineReducers({
  pokeData
})

export default rootReducer;

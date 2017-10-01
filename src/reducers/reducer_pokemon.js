import {REQUEST, POKEMON_SUCCESS, FAILURE, SPECIES_SUCCESS} from '../actions';

const INITIAL_STATE = {
  data: null,
  description: null,
  errMessage: null
}

export default function appState(state=INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST:
      return (
        INITIAL_STATE
      );
    case POKEMON_SUCCESS:
      return (
        Object.assign({}, state, {
          data: action.payload,
          errMessage: null
        })
      );
    case SPECIES_SUCCESS:
      return (
        Object.assign({}, state, {
          description: action.payload.flavor_text_entries[1].flavor_text,
          errMessage: null
        })
      );
    case FAILURE:
      return (
        Object.assign({}, state, {
          errMessage: "Couldn't find the Pokemon you were looking for. Try another one!",
        })
      );
    default:
      return state;
  }
}

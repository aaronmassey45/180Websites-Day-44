import {CALL_API} from 'redux-api-middleware';

const DATA_URL = 'https://pokeapi.co/api/v2/pokemon/';
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';

export const REQUEST = 'REQUEST';
export const FAILURE = 'FAILURE';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const SPECIES_SUCCESS = 'SPECIES_SUCCESS';

export function fetchPokemon(pokemon) {
  const URL = DATA_URL + pokemon;
  return {
    [CALL_API]: {
      types:[REQUEST, POKEMON_SUCCESS, FAILURE],
      endpoint: URL,
      method: 'GET',
    }
  }
}

export function fetchSpeciesData(pokemon) {
  const URL = SPECIES_URL + pokemon;
  return {
    [CALL_API]: {
      types:[REQUEST, SPECIES_SUCCESS, FAILURE],
      endpoint: URL,
      method: 'GET',
    }
  }
}

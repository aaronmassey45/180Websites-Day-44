import * as Pokedex from 'pokeapi-js-wrapper';

const pokeapi = new Pokedex.Pokedex({
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5000
});

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(pokemon) {
  const request = pokeapi.getPokemonSpeciesByName(pokemon);
  return {
    type: FETCH_POKEMON,
    payload: request
  };
}



import { pokemonApi } from "../../../api/pokemonsApi";
import { setPokemon,startLoadingPokemon  } from "./pokemonSlice";


export const getPokemonById = ( id ) => {
    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemon() );

        const { data } = await pokemonApi.get(`/pokemon/${ id }`);

        dispatch( setPokemon({ pokemon: data }) );

    }
}
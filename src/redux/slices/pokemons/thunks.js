
import { pokemonApi } from "../../../api/pokemonsAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonsSlice";


export const getPokemons = ( ) => {
    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemons`);

        dispatch( setPokemons({ pokemons: data }) );

    }
}

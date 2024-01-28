import { pokemonApi } from "../../../api/pokemonsApi";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice";

export const getPokemonById = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingPokemon());
      const { data } = await pokemonApi.get(`/pokemon/${id}`);
      dispatch(setPokemon({ pokemon: data }));
    } catch (error) {
        console.log(error.message);
        
    }
  };
};

import Swal from "sweetalert2";
import { pokemonApi } from "../../../api/pokemonsApi";
import { startLoadingPokemon, setPokemonCreated } from "./createSlice";





export const addPokemon = ( pokemon ) => {
    return async ( dispatch, getState ) => {

        try {
            dispatch( startLoadingPokemon() );
            const { data } = await pokemonApi.post(`/pokemon`, pokemon );
            console.log(data);
            
            dispatch( setPokemonCreated(data) );
            Swal.fire({
                title: "Pokemon created!",
                text: "Go to pokedex to see it",
                icon: "success"
              });
            
        } catch (error) {
            
        }

        

    }
}
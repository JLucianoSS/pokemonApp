import { pokemons } from "./data"


export const getPokemonById = (id) => {
    console.log(id);
    
    return pokemons.find( pokemon => pokemon.id === parseInt(id) );
}
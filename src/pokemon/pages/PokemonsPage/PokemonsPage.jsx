
import { Cards, Filters } from "../../components";


export const PokemonsPage = ({ pokemons,isLoading }) => {

  return (
    <>

      <Filters/>

      <Cards pokemons={pokemons} isLoading={isLoading} /> 
      
    
    </>
  )
}

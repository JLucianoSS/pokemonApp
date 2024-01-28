
import { Cards, Filters, ReloadFloatingButton } from "../../components";
// import styles from "./PokemonsPage.module.scss";


export const PokemonsPage = ({ pokemons,isLoading }) => {

 

  return (
    <>

      <Filters/>

      <Cards pokemons={pokemons} isLoading={isLoading} /> 

      <ReloadFloatingButton/>
      
  
    </>
  )
}

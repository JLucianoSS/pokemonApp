
import { useSelector } from "react-redux";
import { Loading } from "../../../ui/components";
import { Card, Pagination } from "../";
import styles from "./Cards.module.scss";

export const Cards = ({ pokemons, isLoading }) => {

  const { pokemonsPerPage, currentPage } = useSelector((state) => state.pagination);

   /*Logica de la paginación */
   const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
   const pages = [...Array(totalPages + 1).keys()].slice(1);
   const indexOfLastPage = currentPage * pokemonsPerPage;
   const indexOfFirstPage = indexOfLastPage - pokemonsPerPage;
   const visiblePokemons = pokemons.slice(indexOfFirstPage, indexOfLastPage);
   const pokemonListToRender = pokemons.length === 1 ? pokemons : visiblePokemons;



  return (
    <>
      {
        isLoading ? <Loading /> : (
          <>
            <div
              className={`${styles.container_cards} animate__animated animate__fadeIn`}
            >
              {pokemonListToRender.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  images={pokemon.images}
                  types={pokemon.types}
                />
              ))}
            </div>
            <Pagination
              pages={pages}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )
      }
    </>
  );
};

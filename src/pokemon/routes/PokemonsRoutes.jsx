import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui";
import { AboutMePage, CreatePokemonPage, DetailPage, PokemonsPage, SearchPage } from "../pages";

import { getPokemons } from "../../redux/slices/pokemons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const PokemonsRoutes = () => {

  const { pokemons = [], isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getPokemons());
  }, [ ]);


  return (
    <>
        <NavBar/>

        <Routes>
            
            <Route path="/pokemons" element={<PokemonsPage pokemons={ pokemons } isLoading={ isLoading } />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/create-pokemon" element={<CreatePokemonPage />} />
            <Route path="/pokemon/:id" element={<DetailPage />} />
            <Route path="/about-me" element={<AboutMePage />} />

            
            <Route path="/" element={<Navigate to="/pokemons" />} />
            <Route path="/*" element={<Navigate to="/pokemons" />} />

   
        </Routes>


    </>
  )
}

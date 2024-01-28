import { Route, Routes } from "react-router-dom";
import { PokemonsRoutes } from "../pokemon/routes/PokemonsRoutes";
import { WelcomePage } from "../auth/pages";


export const AppRouter = () => {
  return (
    <>

        <Routes >
            <Route path="/welcome" element={ <WelcomePage/> }/>
            <Route path="/*" element={ <PokemonsRoutes/> }/>


        </Routes>
    
    </>
  )
};



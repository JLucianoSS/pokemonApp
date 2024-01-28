import { pokemonApi } from "../../../api/pokemonsApi";
import {  setTypes, startLoadingTypes } from "./typesSlice";




export const getTypes = () => {
    return async ( dispatch, getState ) => {

        dispatch( startLoadingTypes() );

        const { data } = await pokemonApi.get(`/types`);

        dispatch( setTypes(data) );

    }
}
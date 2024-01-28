import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const pokemonApi = createApi({

    reducerPath: 'pokemon',

    baseQuery: fetchBaseQuery({
        baseUrl: `${apiUrl}`
    }),

    endpoints: (builder) => ({

        getPokemonById: builder.query({
            query: (pokemonId) => `/pokemon/${ pokemonId }`
        }),
        getPokemonByName: builder.query({
            query: (name) => `/pokemon/?name=${name}`
        }),

    })

})

export const { useGetPokemonByIdQuery, useGetPokemonByNameQuery } = pokemonApi;

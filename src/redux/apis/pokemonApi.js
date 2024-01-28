import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pokemonApi = createApi({

    reducerPath: 'pokemon',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api'
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

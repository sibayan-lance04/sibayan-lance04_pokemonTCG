import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pokemontcg.io/"
  }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => "v2/cards",
      providesTags: ["pokemon"]
    }),
  })
});

export const { useGetPokemonQuery } = pokemonApi;
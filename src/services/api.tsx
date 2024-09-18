import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKey } from "../comman/api/movies-api-key";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (search) => `?apikey=${APIKey}&s=${search}&type=movie`,
    }),
    getSeries: builder.query({
      query: (search) => `?apikey=${APIKey}&s=${search}&type=series`,
    }),
    getMoviesorSeriesDetails: builder.query({
      query: (id) => `?apikey=${APIKey}&i=${id}&Plot=full`,
    }),
  }),
});
export const { useGetMoviesQuery, useGetSeriesQuery, useGetMoviesorSeriesDetailsQuery } = api;

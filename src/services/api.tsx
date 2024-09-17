import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIKey } from "../comman/api/movies-api-key";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (movieText) => `?apikey=${APIKey}&s=${movieText}&type=movie`,
    }),
    getSeries: builder.query({
      query: (seriesText) => `?apikey=${APIKey}&s=${seriesText}&type=series`,
    }),
    getMoviesorSeriesDetails: builder.query({
      query: (id) => `?apikey=${APIKey}&i=${id}&Plot=full`, // Ensure the API URL is correct
    }),
    // getEpisode: builder.query({
    //   query: (episodeText) => `?apikey=${APIKey}&s=${episodeText}&type=episode`,
    // }),
  }),
});
export const { useGetMoviesQuery, useGetSeriesQuery, useGetMoviesorSeriesDetailsQuery } = api;

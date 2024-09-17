import { createSlice } from "@reduxjs/toolkit";
import { Movie, Series } from "../../components/home/home";

export interface MovieState {
  movies: Movie[];
  value: number;
}

export interface SeriesState {
  series: Series[];
  value: number;
}

export interface DetailsState {
  movies: Movie[];
  series: Series[];
  value: number;
  selectedMovieOrSeries: object;
}

const initialMovieState: MovieState = {
  value: 0,
  movies: [],
};

const initialSeriesState: SeriesState = {
  value: 0,
  series: [],
};

const initialDetailsState: DetailsState = {
  value: 0,
  movies: [],
  series: [],
  selectedMovieOrSeries: {},
};

// Movie slice
export const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovieState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload; // updates the state with the new list of movies
    },
  },
});

// Series slice
export const seriesSlice = createSlice({
  name: "series",
  initialState: initialSeriesState,
  reducers: {
    addSeries: (state, { payload }) => {
      state.series = payload;
    },
  },
});

// Details slice (both movies and series)
export const detailsSlice = createSlice({
  name: "details",
  initialState: initialDetailsState,
  reducers: {
    addDetails: (state, { payload }) => {
      state.movies = payload.movies;
      state.series = payload.series;
    },
    setSelectedMovieOrSeries: (state, { payload }) => {
      state.selectedMovieOrSeries = payload;
    },
  },
});

// Export actions
export const { addMovies } = movieSlice.actions;
export const { addSeries } = seriesSlice.actions;
export const { addDetails, setSelectedMovieOrSeries } = detailsSlice.actions;

// Export reducers as a single object
const rootReducer = {
  movie: movieSlice.reducer,
  series: seriesSlice.reducer,
  details: detailsSlice.reducer,
};

export default rootReducer;

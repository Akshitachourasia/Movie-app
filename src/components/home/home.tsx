import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import settings from "../../comman/settings";
import MovieDetails from "../movie-details/movie-details";
import { useGetMoviesQuery, useGetSeriesQuery } from "../../services/api";
import { addMovies, addSeries } from "../../features/movies/movie-slice";
import "./home.scss";

export interface Movie {
  movies: Movie[];
  searchTerm: string;
  Poster: string;
  imdbID: string;
  Title: string;
  Year: string;
}

export interface Series {
  Poster: string;
  imdbID: string;
  Title: string;
  Year: string;
}
interface RootState {
  movie: {
    movies: Movie[];
  };
  series: {
    series: Series[];
  };
}

const HomePage = () => {
  const dispatch = useDispatch();

  const { data: defaultMovies } = useGetMoviesQuery("harry potter");
  const { data: defaultSeries } = useGetSeriesQuery("marvel");
  const movies = useSelector((state: RootState) => state.movie.movies);
  const series = useSelector((state: RootState) => state.series.series);

  useEffect(() => {
    if (defaultMovies && defaultSeries) {
      dispatch(addMovies(defaultMovies.Search));
      dispatch(addSeries(defaultSeries.Search));
    }
  }, [dispatch, defaultMovies, defaultSeries]);

  return (
    <div>
      <div className="movie-section">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {movies?.length > 0 ? (
              movies.map((movie) => (
                <div key={movie.imdbID} className="movie-card">
                  <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No Movies Found</p>
            )}
          </Slider>
        </div>
      </div>

      <div className="series-section">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {series?.length > 0 ? (
              series.map((serie) => (
                <div key={serie.imdbID} className="movie-card">
                  <Link to={`/series/${serie.imdbID}`}>
                    <img src={serie.Poster} alt={serie.Title} />
                    <h4>{serie.Title}</h4>
                    <p>{serie.Year}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No Series Found</p>
            )}
          </Slider>
        </div>
      </div>

      <MovieDetails />
    </div>
  );
};

export default HomePage;

import { useDispatch } from "react-redux";
import { useGetMoviesQuery, useGetSeriesQuery } from "../../services/api";
import { useEffect } from "react";
import { addMovies, addSeries } from "../../features/movies/movie-slice";
import "./home.scss";
import { Link } from "react-router-dom";
import MovieDetails from "../movie-details/movie-details";

export interface Movie {
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

export interface Details {
  Poster: string;
  imdbID: string;
  Title: string;
  Year: string;
}

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetMoviesQuery("Harry");
  const { data: seriesData } = useGetSeriesQuery("Friends");
  console.log(data, "MOVIES");
  console.log(seriesData, "SERIES");
  useEffect(() => {
    if (data && seriesData) {
      dispatch(addMovies(data.Search));
      dispatch(addSeries(seriesData.Search));
    }
  }, [data, dispatch, seriesData]);

  return (
    <div>
      <div className="movie-section">
        <h2>Movies</h2>
        <div className="movie-container">
          {data?.Search?.map((movie: Movie) => (
            <div key={movie.imdbID} className="movie-card">
              <Link to={`/movie/${movie.imdbID}`}>
              {/* <Link to={`/movies/${movie.imdbID}`}> */}
                <img src={movie.Poster} alt={movie.Title} />
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
              </Link>
              {console.log(movie.imdbID)}
            </div>
          ))}
        </div>
      </div>
      <div className="series-section">
        <h2>Series</h2>
        <div className="movie-container">
          {seriesData?.Search?.map((series: Series) => (
            <div key={series.imdbID} className="movie-card">
              <img src={series.Poster} alt={series.Title} />
              <h4>{series.Title}</h4>
              <p>{series.Year}</p>
            </div>
          ))}
        </div>
      </div>
      <MovieDetails />
    </div>
  );
};

export default HomePage;

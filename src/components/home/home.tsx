import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Slider from "react-slick";
import settings from "../../comman/settings";
import { useGetMoviesQuery, useGetSeriesQuery } from "../../services/api";
import "./home.scss";

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

interface OutletContext {
  searchQuery: string;
}

const HomePage = () => {
  const { searchQuery } = useOutletContext<OutletContext>();

  const {
    data: MovieData,
    isError: movieError,
    isLoading: movieLoading,
  } = useGetMoviesQuery(searchQuery || "harry potter");
  const {
    data: SeriesData,
    isError: seriesError,
    isLoading: seriesLoading,
  } = useGetSeriesQuery(searchQuery || "marvel");

  const noMoviesFound =
    !MovieData?.Search?.length && !movieLoading && !movieError;
  const noSeriesFound =
    !SeriesData?.Search?.length && !seriesLoading && !seriesError;

  const showNoResultsMessage = noMoviesFound && noSeriesFound;

  return (
    <div>
      {!showNoResultsMessage && (
        <>
          <div className="movie-section">
            <h2>Movies</h2>
            <div className="movie-container">
              {movieLoading && <p>Loading movies...</p>}
              {movieError && <p>Error fetching movies.</p>}
              {noMoviesFound ? (
                <p>No Movies Found</p>
              ) : (
                MovieData?.Search?.length > 0 && (
                  <Slider {...settings}>
                    {MovieData.Search.map((movie: Movie) => (
                      <div key={movie.imdbID} className="movie-card">
                        <Link to={`/movie/${movie.imdbID}`}>
                          <img src={movie.Poster} alt={movie.Title} />
                          <h4>{movie.Title}</h4>
                          <p>{movie.Year}</p>
                        </Link>
                      </div>
                    ))}
                  </Slider>
                )
              )}
            </div>
          </div>

          <div className="series-section">
            <h2>Series</h2>
            <div className="movie-container">
              {seriesLoading && <p>Loading series...</p>}
              {seriesError && <p>Error fetching series.</p>}
              {noSeriesFound ? (
                <p>No Series Found</p>
              ) : (
                SeriesData?.Search?.length > 0 && (
                  <Slider {...settings}>
                    {SeriesData.Search.map((series: Series) => (
                      <div key={series.imdbID} className="movie-card">
                        <Link to={`/series/${series.imdbID}`}>
                          <img src={series.Poster} alt={series.Title} />
                          <h4>{series.Title}</h4>
                          <p>{series.Year}</p>
                        </Link>
                      </div>
                    ))}
                  </Slider>
                )
              )}
            </div>
          </div>
        </>
      )}
      {showNoResultsMessage && (
        <div className="no-results">
          <h2>No Movies or Series Found</h2>
          <p>Please try to search for something else.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

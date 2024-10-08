import { useParams } from "react-router-dom";
import { useGetMoviesorSeriesDetailsQuery } from "../../services/api";

import "./movie-details.scss";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const { data, isLoading } = useGetMoviesorSeriesDetailsQuery(imdbID);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className="details-section">
          <div className="section-left">
            <div className="movie-title">
              <h1>{data.Title}</h1>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : {data.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : {data.Year}
                </span>
              </div>

              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director : </span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars : </span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Genres : </span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages : </span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards : </span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

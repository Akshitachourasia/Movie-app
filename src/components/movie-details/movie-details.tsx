import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMoviesorSeriesDetailsQuery } from "../../services/api";
import { useDispatch } from "react-redux";
import { addDetails } from "../../features/movies/movie-slice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const { data } = useGetMoviesorSeriesDetailsQuery(imdbID);
  const dispatch = useDispatch();
  console.log(imdbID, "ID");
  useEffect(() => {
    if (data) {
      dispatch(addDetails(data));
    }
  }, [data, dispatch]);

  return (
    <>
      {data && (
        <div className="movie-details">
          <h2>{data.Title}</h2>
          <p>{data.Year}</p>
          <img src={data.Poster} alt={data.Title} />
          <p>{data.Plot}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

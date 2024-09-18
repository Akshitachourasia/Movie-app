import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";
import { useDispatch } from "react-redux";
import { useGetMoviesQuery, useGetSeriesQuery } from "../../services/api";
import { addMovies, addSeries } from "../../features/movies/movie-slice";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const { data } = useGetMoviesQuery(search);
  const { data: seriesData } = useGetSeriesQuery(search);
  const dispatch = useDispatch();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setSearch("");
    if (search === "") {
      return alert("Please enter something");
    }
    if (data && seriesData) {
      dispatch(addMovies(data.Search));
      dispatch(addSeries(seriesData.Search));
      console.log(data, seriesData);
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Movies or Series"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;

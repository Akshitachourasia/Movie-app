import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";

interface HeaderProps {
  setSearchQuery: (search: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (search.trim() === "") {
      alert("Please enter something");
      return;
    }
    if (search) setSearchQuery(search);
    setSearch("");
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

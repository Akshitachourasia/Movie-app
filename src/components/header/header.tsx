import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";
import { Box, MenuItem, Popper, ClickAwayListener } from "@mui/material";

interface HeaderProps {
  setSearchQuery: (search: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (search.trim() === "") {
      alert("Please enter something");
      return;
    }
    if (search) setSearchQuery(search);
    setSearch("");
  };

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/dashboard">Movie App</Link>
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
      <div className="user-image" onClick={handleUserClick}>
        <img src={user} alt="user" />
      </div>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            <MenuItem component={Link} to="/" onClick={handleLogout}>
              Logout
            </MenuItem>
          </Box>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default Header;

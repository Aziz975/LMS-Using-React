import React from "react";
import { NavLink } from "react-router-dom";

const FacultyNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Register Faculty</NavLink>
      <NavLink to="/faculty-list">Faculty List</NavLink>
      <NavLink to="/faculty-delete">Delete Faculty</NavLink>
    </nav>
  );
};

export default FacultyNavbar;

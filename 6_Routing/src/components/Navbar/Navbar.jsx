import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

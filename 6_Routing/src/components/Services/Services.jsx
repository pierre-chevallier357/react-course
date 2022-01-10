import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <nav>
        <Link to="/services/development">Development</Link>
        <Link to="/services/cyber-security">Cyber-security</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || width > 500) && (
        <ul className="item-list">
          <li>
            <Link to="/" className="item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/write" className="item">
              Write
            </Link>
          </li>
          <li>
            <Link to="/contact" className="item">
              Contact
            </Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNavbar} className="btn">
        ≡
      </button>
    </nav>
  );
}

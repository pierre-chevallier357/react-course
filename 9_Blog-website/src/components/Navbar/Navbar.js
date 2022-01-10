import React, { useState, useEffect } from "react";
import "./Navbar.css";

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
          <li className="item">Home</li>
          <li className="item">Write</li>
          <li className="item">Contact</li>
        </ul>
      )}
      <button onClick={toggleNavbar} className="btn">
        ≡
      </button>
    </nav>
  );
}

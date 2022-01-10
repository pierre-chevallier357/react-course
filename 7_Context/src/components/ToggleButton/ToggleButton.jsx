import React, { useContext } from "react";
import "./ToggleButton.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function ToggleButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={theme ? "toggle-button" : "toggle-button dark-button"}
      >
        {theme ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

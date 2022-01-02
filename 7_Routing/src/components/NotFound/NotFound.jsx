import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>This page does not exist</h1>
      <button onClick={navigateHome}>Go back to home menu</button>
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  return (
    <div>
      <h1>Contact</h1>
      <p>State passed: {location.state}</p>
    </div>
  );
}

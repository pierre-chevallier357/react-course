import React, { useState, useRef, useEffect } from "react";
import "./Accordion.css";
import chevron from "./chevron.png";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightElement, setHeightElement] = useState();

  const toggleAccordion = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightElement(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="accordion">
      <div onClick={toggleAccordion} className="accordion-visible">
        <h2>Toggle accordion</h2>
        <img src={chevron} alt="chevron down" />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accordion-toggle animation" : "accordion-toggle"}
        style={{ height: toggle ? `${heightElement}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro officia laborum quasi in aut excepturi, quibusdam facilis enim!
          Nulla id fugiat enim officia tempora voluptatem maxime provident
          expedita nihil.
        </p>
      </div>
    </div>
  );
}

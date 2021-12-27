import { useState, useEffect } from "react";

export default function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState();

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    function resizeWindow() {
      setWindowDimension(window.innerWidth);
    }
    resizeWindow();

    return () => {
      window.addEventListener("resize", resizeWindow);
    };
  }, []);

  return windowDimension;
}

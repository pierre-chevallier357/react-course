import { useState, React, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(1);

  const intervalId = useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{timer} s</p>;
}

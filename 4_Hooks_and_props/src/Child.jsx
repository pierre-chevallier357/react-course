import { useState, React } from "react";
import Timer from "./Timer";

export default function Child() {
  const [showTimer, setShowTimer] = useState(true);
  const [array, setArray] = useState([1, 2, 3]);

  const toggleFunc = () => {
    setShowTimer(!showTimer);
  };

  const addFourToArray = () => {
    const newArr = [...array];
    newArr.push(4);
    setArray(newArr);
  };

  return (
    <>
      <h2>Timer shown: {showTimer ? "true" : "false"}</h2>
      <button onClick={toggleFunc}>Toggle timer</button>
      <h2>{showTimer && <Timer />}</h2>
      <button onClick={addFourToArray}>Add 4 to array</button>
      <h2>{array}</h2>
    </>
  );
}

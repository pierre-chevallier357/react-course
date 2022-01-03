import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECR",
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

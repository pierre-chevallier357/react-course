import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const { cart, count } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
  }));

  const dispatch = useDispatch();

  const [cartData, setCartData] = useState(0);

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

  const addToCart = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <hr />
      <h3>Cart value: {cart}</h3>
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <br />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImage } from "../redux/reducers/imageDataReducer";

export default function Counter() {
  const { cart, count, imageUrl } = useSelector((state) => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.imageDataReducer,
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

  useEffect(() => {
    dispatch(getCatImage());
  }, []);

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
      <hr />
      <h3>Cat image</h3>
      {imageUrl && <img src={imageUrl} style={{ width: "300px" }} alt="cat" />}
    </div>
  );
}

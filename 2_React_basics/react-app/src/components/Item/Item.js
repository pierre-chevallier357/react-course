import { useState } from "react";
import "./Item.css";

function Item(props) {
  return (
    <div>
      <h1>Item component</h1>
      <img src={"/images/landscape.jpg"} alt="" />
    </div>
  );
}
export default Item;

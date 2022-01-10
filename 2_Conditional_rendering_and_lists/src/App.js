import { useState } from "react";
import Item from "./components/Item/Item";

function App() {
  const [toggle, setToggle] = useState(true);
  const [dataArray, setDataArray] = useState([
    { name: "Juliet" },
    { name: "John" },
    { name: "Jack" },
  ]);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div className={toggle ? "box animated" : "box"}></div>
      <button onClick={changeState}>Change state</button>
      {dataArray.map((item, index) => {
        return <p key={index}>Name: {item.name}</p>;
      })}
    </div>
  );
}

export default App;

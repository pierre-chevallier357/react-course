import { useState } from "react";
import Item from "./components/Item/Item";

function App() {
  const [inputData, setInputData] = useState("Initial value");

  const updateInput = (e) => {
    setInputData(e);
  };

  return (
    <div className="App">
      <h1 className="item-title">App component</h1>
      <input
        type="text"
        value={inputData}
        onInput={(e) => updateInput(e.target.value)}
      />
      <p>Input value: {inputData}</p>
      <Item />
    </div>
  );
}

export default App;

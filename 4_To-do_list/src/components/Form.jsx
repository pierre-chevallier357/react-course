import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [toDoList, setToDoList] = useState([
    { text: "Walk the dog", id: uuidv4() },
    { text: "Practice sport", id: uuidv4() },
    { text: "Code with React", id: uuidv4() },
  ]);

  const [inputState, setInputState] = useState("");

  const addToDo = (e) => {
    e.preventDefault();
    const updatedToDoList = [...toDoList];
    const newToDo = {
      text: inputState,
      id: uuidv4(),
    };
    updatedToDoList.push(newToDo);
    setToDoList(updatedToDoList);
    setInputState("");
  };

  const updateInputValue = (e) => {
    setInputState(e);
  };

  const deleteToDo = (id) => {
    const filteredTodoList = toDoList.filter((item) => {
      return item.id !== id;
    });
    setToDoList(filteredTodoList);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addToDo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          New task
        </label>
        <input
          value={inputState}
          type="text"
          className="form-control"
          id="todo"
          onInput={(e) => updateInputValue(e.target.value)}
        />
        <button className="mt-2 btn btn-primary d-block">OK</button>
      </form>
      <h2>List of things to do:</h2>
      <ul className="list-group">
        {toDoList.map((item) => {
          return (
            <Item
              text={item.text}
              key={item.id}
              id={item.id}
              deleteToDoFunction={deleteToDo}
            />
          );
        })}
      </ul>
    </div>
  );
}

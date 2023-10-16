import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  let [inputList, setinputList] = useState("");
  let [addItems, setItems] = useState([]);

  let itemEvent = (event) => {
    setinputList(event.target.value);
  };

  let addTodo = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  let deleteTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="todo">
          <div className="heading">
            <h1>ToDo List</h1>
          </div>
          <div className="box">
            <input
              type="text"
              name="text"
              id="todo"
              value={inputList}
              placeholder="Add a Item"
              onChange={itemEvent}
            />
            <button onClick={addTodo}>+</button>
          </div>
          <ul>
            {addItems.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  onSelect={deleteTodo}
                  text={itemval}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";

let ToDoList = (props) => {
  return (
    <>
      <div className="item">
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;

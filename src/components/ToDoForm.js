import React, { useState } from "react";

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (formSubmission) => {
    formSubmission.preventDefault();
    addToDo(value);
    setValue("")
  };

  const handleInputChange = (inputChange) => {
    setValue(inputChange.target.value);
  };

  return (
    <form className="toDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="toDoInput"
        value={value}
        placeholder="Please enter a task."
        onChange={handleInputChange}
      ></input>
      <button type="submit" className="toDoBtn">
        Add Task
      </button>
    </form>
  );
};

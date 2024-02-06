import React, { useState } from "react";

export const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (formSubmission) => {
    formSubmission.preventDefault();
    editToDo(value, task.id);
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
        placeholder="Please update the task."
        onChange={handleInputChange}
      ></input>
      <button type="submit" className="toDoBtn">
        Update Task
      </button>
    </form>
  );
};

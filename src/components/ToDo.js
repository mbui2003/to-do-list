import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
  const onTaskClick = () => {
    toggleComplete(task.id);
  };

  const onTrashClick = () => {
    deleteToDo(task.id)
  }

  const onEditClick = () => {
    editToDo(task.id)
  }

  return (
    <div className="toDo">
      <p
        onClick={onTaskClick}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon className="editIcon" icon={faPenToSquare} onClick={onEditClick} />
        <FontAwesomeIcon className="deleteIcon" icon={faTrash} onClick={onTrashClick}/>
      </div>
    </div>
  );
};

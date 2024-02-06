import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
import { EditToDoForm } from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([
      ...toDos,
      { id: uuidv4(), task: toDo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const editToDo = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo
      )
    );
  };

  const editTask = (task, id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo
      )
    );
  };

  return (
    <div className="toDoWrapper">
      <h1>To-Do List</h1>
      <ToDoForm addToDo={addToDo} />
      {toDos.map((toDo, index) =>
        toDo.isEditing ? (
            <EditToDoForm editToDo={editTask} task={toDo} />
        ) : (
          <ToDo
            task={toDo}
            key={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};

import React from "react";
import { useForm } from "../hooks/useForm";

const ToDoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-1 ">Agregar</button>
    </form>
  );
};

export default ToDoAdd;

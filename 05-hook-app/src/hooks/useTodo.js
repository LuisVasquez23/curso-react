import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = (initialState = []) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onHandleAddTodo = (newTodo) => {
    dispatchTodo({
      type: "add",
      payload: newTodo,
    });
  };

  const onHandleDeleteTodo = (todoId) => {
    dispatchTodo({
      type: "delete",
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatchTodo({
      type: "toggle",
      payload: todoId,
    });
  };

  const pedingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    pedingTodosCount,
    onHandleAddTodo,
    onHandleDeleteTodo,
    handleToggle,
  };
};

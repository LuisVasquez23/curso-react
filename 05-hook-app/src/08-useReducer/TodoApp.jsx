import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import ToDoList from "./ToDoList";
import ToDoAdd from "./ToDoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
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

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {todos.length === 0 ? (
            <div className="alert alert-info">No hay tareas pendientes</div>
          ) : (
            <ToDoList
              todos={todos}
              onHandleDeleteTodo={onHandleDeleteTodo}
              onToggleTodo={handleToggle}
            />
          )}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <ToDoAdd onNewTodo={onHandleAddTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;

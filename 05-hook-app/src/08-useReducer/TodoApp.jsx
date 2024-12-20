import ToDoList from "./ToDoList";
import ToDoAdd from "./ToDoAdd";
import { useTodo } from "../hooks/useTodo";

const TodoApp = () => {
  const {
    todos,
    pedingTodosCount,
    onHandleAddTodo,
    onHandleDeleteTodo,
    handleToggle,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small>pendientes: {pedingTodosCount}</small>
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

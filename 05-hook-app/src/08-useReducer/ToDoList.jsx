import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos = [], onHandleDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          {...todo}
          onHandleDeleteTodo={onHandleDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

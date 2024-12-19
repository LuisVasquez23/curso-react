const ToDoItem = ({
  id,
  description,
  done,
  onHandleDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => onToggleTodo(id)}
    >
      <span className={done ? "text-decoration-line-through" : ""}>
        {description}
      </span>
      <button className="btn btn-danger" onClick={() => onHandleDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};

export default ToDoItem;

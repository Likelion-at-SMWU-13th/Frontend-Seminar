import useTodoStore from "../store/store";

function TodoItem({ todo }) {
  const removeTodoSelector = useTodoStore((s) => s.removeTodo);
  const toggleTodoSelector = useTodoStore((s) => s.toggleTodo);

  return (
    <li className="todo-item">
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoSelector(todo.id)}
        />
        <span className="checkmark" />
      </label>

      <span className={`todo-title ${todo.completed ? "done" : ""}`}>
        {todo.title}
      </span>

      <button
        className="btn delete"
        onClick={() => removeTodoSelector(todo.id)}
        title="삭제"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

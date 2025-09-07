import useTodoStore from "../store/store";

function TodoItem({ todo }) {
  const removeTodo = useTodoStore((s) => s.removeTodo);
  const toggleTodo = useTodoStore((s) => s.toggleTodo);

  return (
    <li className="todo-item">
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="checkmark" />
      </label>

      <span className={`todo-title ${todo.completed ? "done" : ""}`}>
        {todo.title}
      </span>

      <button className="btn delete" onClick={() => removeTodo(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;

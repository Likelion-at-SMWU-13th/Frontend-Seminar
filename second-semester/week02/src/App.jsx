import { useState } from "react";
import TodoItem from "./components/TodoItem";
import useTodoStore from "./store/store";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useTodoStore((s) => s.todos);
  const addTodo = useTodoStore((s) => s.addTodo);

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">투두리스트 ^_^</h1>

        <div className="input-row">
          <input
            className="input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="할 일을 추가해봐~"
            aria-label="할 일 입력"
          />
          <button className="btn primary" onClick={handleAddTodo}>
            할일추가
          </button>
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty">할 일이 없어요. 오늘 하나 추가해볼까요?</li>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useTodos } from "../store/Todos";
import { useSearchParams } from "react-router-dom";
import type { Todo } from "../store/Todos";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todoFilter = searchParams.get("todos");

  let filterData: Todo[] = todos;

  if (todoFilter === "active") {
    filterData = todos.filter((todo) => !todo.completed);
  } else if (todoFilter === "completed") {
    filterData = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="list-group">
      {filterData.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex align-items-center justify-content-between ${
            todo.completed ? "main-task" : ""
          }`}
        >
          <div className="form-check d-flex align-items-center gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label
              className={`form-check-label m-0 ${
                todo.completed ? "text-decoration-line-through text-muted" : ""
              }`}
              htmlFor={`todo-${todo.id}`}
            >
              {todo.task}
            </label>
          </div>

          {todo.completed && (
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;

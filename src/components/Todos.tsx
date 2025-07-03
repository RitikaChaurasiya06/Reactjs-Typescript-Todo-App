import { useTodos } from '../store/Todos';
import { useSearchParams } from 'react-router-dom';

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParams] = useSearchParams();
  let todoDatas = searchParams.get('todos');

  let filterData = todos;

  if (todoDatas === 'active') {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todoDatas === 'completed') {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="list-group">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}
            className={`list-group-item d-flex align-items-center justify-content-between ${todo.completed ? 'main-task' : ''}`}>

            <div className="form-check d-flex align-items-center gap-2">
              <input
                className="form-check-input"
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label
                className={`form-check-label m-0  ${todo.completed ? '' : ''}`}
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
        );
      })}
    </ul>
  );
};

export default Todos;

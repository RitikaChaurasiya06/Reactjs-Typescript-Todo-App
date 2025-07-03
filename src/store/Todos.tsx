import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosContextType | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos") || "[]";
    const parsed: Todo[] = JSON.parse(saved);
    return parsed.map(todo => ({ ...todo, createdAt: new Date(todo.createdAt) }));
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddToDo = (task: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      task,
      completed: false,
      createdAt: new Date()
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <todosContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(todosContext);
  if (!context) throw new Error("useTodos must be used within TodosProvider");
  return context;
};

import React, { createContext, useState, useEffect } from "react";
import { TodoItemData } from "@/components/TodoList/TodoList";

interface TodoContextProps {
  todos: TodoItemData[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteAllCompletedTodos: () => void;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<TodoItemData[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const updateTodosAndLocalStorage = (updatedTodos: TodoItemData[]) => {
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const addTodo = (desc: string) => {
    if (desc.trim() !== "") {
      const newTodoItem: TodoItemData = {
        id: todos.length.toString(),
        desc,
        isCompleted: false,
      };
      updateTodosAndLocalStorage([...todos, newTodoItem]);
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    updateTodosAndLocalStorage(updatedTodos);
  };

  const deleteAllCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.isCompleted);
    updateTodosAndLocalStorage(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteAllCompletedTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

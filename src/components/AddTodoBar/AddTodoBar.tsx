import React, { useState } from "react";
import { useTodoContext } from "@/hooks/useTodoContext";
import Button from "../Button/Button";
import "./_styles.scss";

interface AddTodoBarProps {
  placeholder?: string;
}

const AddTodoBar: React.FC<AddTodoBarProps> = ({ placeholder }) => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form
      className="add-todo-bar"
      aria-label="Search input"
      onSubmit={(e) => handleAddTodo(e)}
    >
      <input
        type="text"
        className="add-todo-bar__input"
        value={newTodo}
        placeholder={placeholder ? placeholder : ""}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button content="Add Todo" type="submit" />
    </form>
  );
};

export default AddTodoBar;

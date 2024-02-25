import React, { useState } from "react";
import { useTodoContext } from "@/hooks/useTodoContext";
import Button from "../Button/Button";
import "./_styles.scss";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form
      className="search-bar"
      aria-label="Search input"
      onSubmit={(e) => handleAddTodo(e)}
    >
      <input
        type="text"
        className="search-bar__input"
        value={newTodo}
        placeholder={placeholder ? placeholder : ""}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button content="Add Todo" type="submit" />
    </form>
  );
};

export default SearchBar;

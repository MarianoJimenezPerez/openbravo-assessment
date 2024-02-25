import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { TodoProvider } from "@/context/TodoContext";

describe("<SearchBar />", () => {
  afterEach(cleanup);

  it("Should render a form", () => {
    render(
      <TodoProvider>
        <SearchBar />
      </TodoProvider>
    );

    expect(screen.getByRole("form")).toBeDefined();
  });

  it("Should render a button width 'Add Todo' text", () => {
    render(
      <TodoProvider>
        <SearchBar />
      </TodoProvider>
    );

    expect(screen.getByText("Add Todo")).toBeDefined();
  });
});

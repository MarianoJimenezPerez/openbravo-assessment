import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AddTodoBar from "../AddTodoBar";
import { TodoProvider } from "@/context/TodoContext";

describe("<AddTodoBar />", () => {
  afterEach(cleanup);

  it("Should render a form", () => {
    render(
      <TodoProvider>
        <AddTodoBar />
      </TodoProvider>
    );

    expect(screen.getByRole("form")).toBeDefined();
  });

  it("Should render a button width 'Add Todo' text", () => {
    render(
      <TodoProvider>
        <AddTodoBar />
      </TodoProvider>
    );

    expect(screen.getByText("Add Todo")).toBeDefined();
  });
});

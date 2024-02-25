import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("<SearchBar />", () => {
  afterEach(cleanup);

  it("Should render a form", () => {
    render(<SearchBar />);

    expect(screen.getByRole("form")).toBeDefined();
  });

  it("Should render a button width 'Add Todo' text", () => {
    render(<SearchBar />);

    expect(screen.getByText("Add Todo")).toBeDefined();
  });
});

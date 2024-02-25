import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("<Button />", () => {
  it("Should render a button width 'My button' text", () => {
    render(<Button content="My button" />);

    expect(screen.getByText("My button")).toBeDefined();
  });
});

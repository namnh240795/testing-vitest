import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// write test for App.tsx
describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(linkElement).toBeDefined();
  });

  test("renders count is 0", () => {
    render(<App />);
    const countElement = screen.getByText(/count is 0/i);
    expect(countElement).toBeDefined();
  });

  test("increments count by 1", () => {
    render(<App />);
    const button = screen.getByText(/count is 0/i).closest("button");
    fireEvent.click(button);
    const countElement = screen.getByText(/count is 1/i);
    expect(countElement).toBeDefined();
  });
});
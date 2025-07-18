import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    expect(screen.getByRole("heading").textContent).toMatch(/Welcome to our online store! We're so glad you're here./i);
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop/Shop";
import { BrowserRouter } from "react-router-dom";

describe("Shop component", () => {
  it("renders products on shop page", () => {
    render(
      <BrowserRouter>
        <shop />
      </BrowserRouter>
    );
    expect(screen.queryAllByTestId("product-data-testid").length).toBe(20);
  });
});

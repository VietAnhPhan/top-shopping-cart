import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "../src/route";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders correct heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Welcome to our online store! We're so glad you're here./i
    );
  });

  it("renders product components", async () => {
    const router = createBrowserRouter(routes);
    render(<RouterProvider router={router}></RouterProvider>);

    const user = userEvent.setup();
    await user.click(screen.getAllByText(/Shop/i)[0]);
    await screen.findByRole("heading");
    const products = await screen.findAllByTestId("product-data-testid");
    await screen.findAllByTestId("product-title-data-testid");

    expect(screen.getByRole("heading")).toHaveTextContent("Our Products");
    expect(products.length).toBe(20);
    // expect(
    //   screen.getAllByTestId("product-title-data-testid")[0].textContent
    // ).toBe("Fjallraven - Foldsac....");
  });

  it("renders correct cart numbers", async () => {
    const router = createBrowserRouter(routes);
    render(<RouterProvider router={router}></RouterProvider>);
    const user = userEvent.setup();

    await user.click(screen.getAllByText(/Shop/i)[0]);

    await screen.findAllByRole("button", { name: "Add to Cart" });

    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[0]);
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[1]);
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[2]);

    expect(screen.getByTestId("cart-data-testid")).toHaveTextContent(
      "Cart (3)"
    );
  });

  it("renders correct total price", async () => {
    const router = createBrowserRouter(routes);
    render(<RouterProvider router={router}></RouterProvider>);
    const user = userEvent.setup();

    await user.click(screen.getAllByText(/Shop/i)[0]);
    await screen.findAllByRole("button", { name: "Add to Cart" });
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[0]);
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[1]);
    await user.click(screen.getAllByRole("button", { name: "Add to Cart" })[2]);

    const productPrices = screen.getAllByTestId("price");

    expect(
      parseFloat(productPrices[0].textContent.slice(1) * 2) +
        parseFloat(productPrices[1].textContent.slice(1) * 3) +
        parseFloat(productPrices[2].textContent.slice(1) * 4)
    ).toBe(510.76);
  });
});

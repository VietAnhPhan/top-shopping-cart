import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function getTotalProducts() {
    const total = cart.reduce(
      (accumulator, product) => accumulator + parseInt(product.total),
      0
    );

    return total;
  }

  return (
    <>
      <Header totalProductsCart={getTotalProducts()}></Header>
      <main>
        <Outlet context={{ cart, setCart }}></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;

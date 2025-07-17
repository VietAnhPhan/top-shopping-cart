import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { useState } from "react";
import Footer from "./Footer/Footer";

function Home() {
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
        <h1>Welcome to our online store! We're so glad you're here.</h1>
        <p>
          Step into a world of endless possibilities, where quality meets
          convenience. Whether you're searching for the latest trends, everyday
          essentials, or unique gifts, we've carefully curated a collection that
          we know you'll love.
        </p>
        <Link to="/shop">Shop now</Link>
      </main>
      <Outlet context={{ cart, setCart }}></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Home;

import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { useState } from "react";

function Home() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header totalProductsCart={cart.length}></Header>
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
    </>
  );
}

export default Home;

import Header from "../Header/Header";
import Product from "../Product/Product";
import { UseProducts } from "../UseProducts";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const { products, error, loading } = UseProducts(
    "https://fakestoreapi.com/products"
  );

  const {cart, setCart} = useOutletContext();

  function addToCart(data) {
    const productsInCart = [...cart];
    productsInCart.push(data);
    setCart(productsInCart);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something wrong</p>;

  return (
    <>
      <main>
        <h1>Our Products</h1>
        <div className={styles.products}>
          {products.map((product) => (
            <Product
              key={product.id}
              data={product}
              onAdd={addToCart}
            ></Product>
          ))}
        </div>
      </main>
    </>
  );
}

export default Shop;

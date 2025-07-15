import { useOutletContext } from "react-router-dom";
import ProductInCart from "../Product/ProductInCart";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useOutletContext();

  function totalPrice() {
    const total = cart.reduce(
      (accumulaltor, currentProd) => accumulaltor + currentProd.price,
      0
    );

    return total;
  }

  return (
    <>
      <main>
        <h1>Your cart</h1>

        <div className={styles.cartSummary}>
          <div>
            {cart.map((product) => (
              <ProductInCart key={product.id} data={product}></ProductInCart>
            ))}
          </div>
          <div>
            <h3>Shopping Summary</h3>
            <p>Total: ${totalPrice()}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;

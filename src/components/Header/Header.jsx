import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ totalProductsCart }) {
  return (
    <header>
      <nav>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={styles.menuItem}>
            <Link data-testid="cart-data-testid" to="/cart">Cart ({totalProductsCart})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

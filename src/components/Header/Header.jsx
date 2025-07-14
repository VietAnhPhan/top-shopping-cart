import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({productsInCart}) {
 
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
            <Link to="/cart">Cart ({productsInCart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import { useState } from "react";
import styles from "../Product/Product.module.css";

function Product({ data, onAdd }) {
  const [total, setTotal] = useState(1);

  function handleAdd(data) {
    data.total = total;
    onAdd(data);
  }

  function handleTotalChange(e) {
    setTotal(e.target.value);
  }

  return (
    <div key={data.id} className={styles.product}>
      <img className={styles.productImage} src={data.image}></img>
      <p>{data.title.substring(0, 20) + "...."}</p>
      <p>${data.price}</p>
      <p>{data.description.substring(0, 20) + "..."}</p>
      <p>{data.category}</p>
      <div>
        <input
          type="number"
          value={total}
          onChange={handleTotalChange}
          min={1}
        />
      </div>
      <button onClick={() => handleAdd(data)}>Add to Cart</button>
    </div>
  );
}

export default Product;

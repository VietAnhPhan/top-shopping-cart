import styles from "../Product/Product.module.css";

function Product({ data, onAdd }) {
  function handleAdd(data) {
    onAdd(data);
  }

  return (
    <div key={data.id} className={styles.product}>
      <img className={styles.productImage} src={data.image}></img>
      <p>{data.title.substring(0,20) + "...."}</p>
      <p>${data.price}</p>
      <p>{data.description.substring(0, 60) + "..."}</p>
      <p>{data.category}</p>
      <button onClick={() => handleAdd(data)}>Add to Cart</button>
    </div>
  );
}

export default Product;

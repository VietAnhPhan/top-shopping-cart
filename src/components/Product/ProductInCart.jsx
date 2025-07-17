import styles from "../Product/ProductInCart.module.css";

function ProductInCart({ data }) {
  //   function handleAdd(data) {
  //     onAdd(data);
  //   }

  return (
    <div key={data.id} className={styles.product}>
      <img className={styles.productImage} src={data.image}></img>
      <div>
          <p>{data.title.substring(0, 20) + "...."}</p>
          <p>${data.price}</p>
          <p>{data.description.substring(0, 60) + "..."}</p>
          <p>{data.category}</p>
          <p>{data.total}</p>
      </div>
      {/* <button onClick={() => handleAdd(data)}>Add to Cart</button> */}
    </div>
  );
}

export default ProductInCart;

import { useState, useEffect } from "react";

function UseProducts(url) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Sever error");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { products, error, loading };
}

export { UseProducts };

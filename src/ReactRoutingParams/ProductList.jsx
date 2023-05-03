import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    console.log({ url });
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>My Products</h1>
      <div>
        {products.map((item) => {
          return (
            <Link to={`/product-details/${item.id}`} key={item.id}>
              <p>Title: {item.title}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

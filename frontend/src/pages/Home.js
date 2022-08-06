import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <ProductsList products={products} key={products.id} />
    </div>
  );
}

export default Home;

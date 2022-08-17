import React, { useContext, useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "../styles/home.module.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          data[key].id = key;
          setProducts((prev) => {
            return [...prev, data[key]];
          });
        }
        // setProducts(data);
      });
  }, []);

  if (spinner) {
    return (
      <ClipLoader className={classes.spinner} loading={spinner} size={35} />
    );
  }

  return (
    <div>
      <ProductsList products={products} key={products.id} />
    </div>
  );
}

export default Home;

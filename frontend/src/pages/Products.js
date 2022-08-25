import React, { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";
import Search from "../components/Search";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "../styles/home.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 300);
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
      <Search />
      <div>
        <ProductsList products={products} key={products.id} />
      </div>
    </div>
  );
}

export default Products;

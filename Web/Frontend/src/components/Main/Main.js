import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { ProductContext } from "../../ProductContext";

import "./Styles/style.css";

import Product from "./Product/Product";
import api from "../../api";

const Main = () => {
  const [products, setProducts] = useContext(ProductContext);

  useEffect(async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  }, []);

  return (
    <main>
      {products.map((product) => (
        <Product key={product.ID_PRODUTO} product={product} />
      ))}
    </main>
  );
};

export default Main;

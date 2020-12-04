import React, { useEffect, useState } from "react";

import api from "../../api";

import "../Main/Styles/style.css";

import Product from "../Main/Product/Product";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [products, SetProducts] = useState([]);
  const Location = useLocation();

  console.log(Location);

  useEffect(async () => {
    const response = await api.get(
      `/products/search/?q=${Location.search.split("q=")[1]}`
    );
    SetProducts(response.data);
  }, [Location]);

  return (
    <main>
      {products.map((product) => (
        <Product key={product.ID_PRODUTO} product={product} />
      ))}
    </main>
  );
};

export default Main;

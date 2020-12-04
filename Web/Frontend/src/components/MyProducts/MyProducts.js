import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Add } from "../../assets/add-product.svg";

import "./Styles/style.css";

const MyProducts = () => {
  return (
    <main>
      <Link to="/addproduct">
        <div className="add-product">
          <Add />
          <p>
            Adicionar <br />
            novo produto
          </p>
        </div>
      </Link>
    </main>
  );
};

export default MyProducts;

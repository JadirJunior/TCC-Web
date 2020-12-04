import React, { useState } from "react";

import "./Styles/style.css";

import ToggleHeart from "../../ToggleHeart/ToggleHeart";
import { Link } from "react-router-dom";
import { ReactComponent as Stars } from "../../../assets/stars.svg";

const Product = ({ product }) => {
  const imagem =
    typeof product.IMAGEM == "object" ? product.IMAGEM[0] : product.IMAGEM;

  return (
    <div className="produto">
      <ToggleHeart className="heart" />
      <Link to={`/products/${product.ID_PRODUTO}`}>
        <div className="img-top-product">
          <img src={imagem} alt="" />
        </div>
        <div className="product_info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
          >
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="7.5"
              cy="7.5"
              r="7.5"
              fill={product.HEX}
            />
          </svg>
          <div className="cimaproduto">
            <p className="titulo">{product.NOME}</p>
            <p className="categoria">{product.CATEGORIA}</p>
          </div>
          <p className="vendedor">{product.USU_VEND_FIS}</p>
          <Stars />
          <p className="preco">{`R$ ${product.PRECO},00`}</p>
        </div>
      </Link>
    </div>
  );
};
export default Product;

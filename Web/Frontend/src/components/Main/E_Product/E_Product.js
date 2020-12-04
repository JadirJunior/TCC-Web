import React, { useContext, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import api from "../../../api";

import "./Styles/style.css";

import { InfoContext } from "../../../InfoContext";

import { ReactComponent as Line } from "../../../assets/vertical_line.svg";
import { ReactComponent as Cart } from "../../../assets/shopping-cart-white.svg";
import Counter from "./Counter/Counter";

const E_Product = () => {
  const [product, setProduct] = useContext(InfoContext);
  const params = useParams();

  useEffect(async () => {
    const response = await api.get(`/products/${params.id}`);
    setProduct(response.data);
  }, []);

  console.log(product);

  return (
    <div className="OnProduct">
      <div className="img-left">
        <img src={product.IMAGEM} alt="" />
      </div>
      <div className="line">
        <Line />
      </div>
      <div className="content-right">
        <div className="top-box">
          <p className="categoriaProduct">{product.CATEGORIA}</p>
          <p className="nomeProduct">{product.NOME}</p>
        </div>
        <p className="precoProduct">{`R$${product.PRECO},00`}</p>
        <div className="Cores">
          <p className="cor">Cores</p>
          <svg
            id="Component_22_1"
            data-name="Component 22 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <circle
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="15"
              cy="15"
              r="15"
              fill={product.HEX}
            />
          </svg>
        </div>
        <div className="Tamanho">
          <p>Tamanho (cm)</p>
          <div className="box-tamanho">
            <p>{product.TAMANHO}</p>
          </div>
        </div>
        <div className="Qtde">
          <p className="quantidadeProduct">Quantidade</p>
          <Counter />
        </div>
        <Link to="/products">
          <button className="Adicionar">
            Adicionar ao Carrinho <Cart />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default E_Product;

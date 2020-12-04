import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Add } from "../../assets/add-product.svg";
import { ReactComponent as Stars } from "../../assets/stars.svg";

import "./Styles/style.css";

const MyAddedProducts = () => {
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
      <Link to="/addedproduct">
        <div className="produto-pronto">
          <div className="img-top-product">
            <img
              src="https://paperplan.blob.core.windows.net/images/4f26fabc0a9999291d530fe3d9745c26-WhatsApp Image 2020-12-02 at 01.59.37.jpeg"
              alt=""
            />
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
                fill="#2dcac6"
              />
            </svg>
            <div className="cimaproduto">
              <p className="titulo">Tsuru</p>
              <p className="categoria">Origami</p>
            </div>
            <p className="vendedor">Dudu</p>
            <Stars />
            <p className="preco">R$3,00</p>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default MyAddedProducts;

import React from "react";

import "./Styles/style.css";

import { ReactComponent as Line } from "../../assets/vertical_line.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { Link } from "react-router-dom";

const AddedProduct = () => {
  return (
    <div className="Adicionar-Product">
      <div className="Add-img">
        <img
          src="https://paperplan.blob.core.windows.net/images/4f26fabc0a9999291d530fe3d9745c26-WhatsApp Image 2020-12-02 at 01.59.37.jpeg"
          alt=""
        />
      </div>
      <div className="line">
        <Line />
      </div>
      <div className="content-right">
        <div className="top-box">
          <p className="categoriaProduct">
            Origami <Edit />
          </p>
          <p className="nomeProduct">
            Tsuru <Edit />
          </p>
        </div>
        <p className="reais">
          R$3,00 <Edit />
        </p>

        <div className="Cores">
          <p className="cor">Cores</p>
          <div className="Adicionarcor">
            <svg
              id="Component_16_15"
              data-name="Component 16 – 15"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                id="Path_21"
                data-name="Path 21"
                d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                fill="#2dcac6"
              />
            </svg>
          </div>
        </div>
        <div className="Tamanho">
          <p>Tamanho (cm)</p>
          <div className="box-size">
            <p>7 x 7</p>
          </div>
        </div>
        <div className="final-addproduct">
          <Link to="/myaddedproducts">
            <button className="Adicionar">Salvar Alterações</button>
          </Link>
          <Link to="/myproducts">
            <button className="Excluir">Excluir</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddedProduct;

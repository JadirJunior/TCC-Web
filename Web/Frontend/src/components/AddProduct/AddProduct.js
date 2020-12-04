import React from "react";

import "./Styles/style.css";

import { ReactComponent as Line } from "../../assets/vertical_line.svg";
import { ReactComponent as Add } from "../../assets/add-product.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="Adicionar-Product">
      <Link to="/addedproduct">
        <div className="Add-img">
          <Add />
          <p>
            Adicionar <br />
            Imagem
          </p>
        </div>
      </Link>
      <div className="line">
        <Line />
      </div>
      <div className="content-right">
        <div className="top-box">
          <p className="categoriaProduct">
            Categoria <Edit />
          </p>
          <p className="nomeProduct">
            Nome <Edit />
          </p>
        </div>
        <p className="reais">
          R$0,00 <Edit />
        </p>

        <div className="Cores">
          <p className="cor">Cores</p>
          <div className="Adicionarcor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <g
                id="Group_206"
                data-name="Group 206"
                transform="translate(-1319 -528)"
              >
                <g
                  id="Component_26_5"
                  data-name="Component 26 – 5"
                  transform="translate(1319 528)"
                >
                  <circle
                    id="Ellipse_17"
                    data-name="Ellipse 17"
                    cx="15"
                    cy="15"
                    r="15"
                    fill="#7d3d92"
                  />
                </g>
                <line
                  id="Line_131"
                  data-name="Line 131"
                  y2="15"
                  transform="translate(1333.5 535.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  id="Line_132"
                  data-name="Line 132"
                  y2="15"
                  transform="translate(1341.5 543) rotate(90)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="3"
                />
              </g>
            </svg>
            <p>Adicionar Cor</p>
          </div>
        </div>
        <div className="Tamanho">
          <p>Tamanho (cm)</p>
          <div className="box-size">
            <p>Adicionar Tamanho</p>
          </div>
        </div>
        <div className="final-addproduct">
          <button className="Adicionar">Adicionar</button>
          <button className="Excluir">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

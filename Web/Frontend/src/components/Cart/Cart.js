import React, { useState } from "react";

import "./Styles/style.css";

import { ReactComponent as Stars } from "../../assets/stars.svg";
import Counter from "../Main/E_Product/Counter/Counter";
import { Link } from "react-router-dom";

const Cart = () => {
  const [frete, setFrete] = useState();

  return (
    <div className="cart">
      <div className="Cart-Products">
        <h1 className="titulo">Meu Carrinho</h1>
        <div className="carrinho-produto">
          <div className="separacao1">
            <img
              src="https://paperplan.blob.core.windows.net/images/ddba27e1f9a821b16b6c9afceabc39ca-WhatsApp Image 2020-12-02 at 01.59.32 (1).jpeg"
              alt=""
            />
            <div className="produto-carrinho-info">
              <p className="produto-nome">Nome</p>
              <p className="produto-categoria">Categoria</p>
              <p className="produto-vendedor">Vendedor</p>
              <Stars />
              <p className="produto-preco">R$ 0,35</p>
            </div>
          </div>
          <div className="separacao2">
            <Counter />
            <p>R$ 0,35</p>
          </div>
        </div>
      </div>
      <div className="Cart-Resumo">
        <h1 className="titulo">Resumo do Pedido</h1>
        <div className="precinhos">
          <p className="semititulo">SUBTOTAL</p>
          <p className="precofrete">R$ 0,35</p>
        </div>
        <div className="precinhos">
          <p className="semititulo">FRETE</p>
          <p className="precofrete">R$ 3,50</p>
        </div>
        <div className="CEP">
          <input type="text" value="02309000" />
          <p>OK</p>
        </div>
        <p className="Rua">Rua Irmãos Pila</p>
        <div className="precinhos">
          <p className="semititulo">TOTAL</p>
          <p className="precofrete">R$ 3,85</p>
        </div>
        <Link to="/products">
          <button>FINALIZAR COMPRA</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

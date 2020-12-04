import React, { useContext, useState } from "react";
import Modal from "react-modal";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import Logo from "../../assets/logo.png";

import "./Styles/style.css";

import Searchbar from "./Searchbar/Searchbar";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../LoginContext";

const Header = () => {
  const History = useHistory();
  const [login, setLogin] = useContext(LoginContext);
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Link to="/products">
        <img src={Logo} alt="" />
      </Link>
      <Searchbar />
      {login === null ? (
        <p onClick={() => History.push("#login")}>Entrar/Cadastrar</p>
      ) : (
        <img
          className="imagem-pessoa"
          onClick={() => setOpen(true)}
          src={login.IMAGEM}
        />
      )}
      <Link to="/cart">
        <ShoppingCart />
      </Link>
      <Modal
        className="modal-user"
        overlayClassName="overlay_modal-user"
        isOpen={open}
        onRequestClose={() => setOpen(false)}
      >
        <div className="modal-right">
          <img src={login?.IMAGEM} alt="" />
          <p>{login?.USU_VEND_FIS}</p>
        </div>
        <div className="modal-left">
          <p>Meu Perfil</p>
          <Link to={{ pathname: "/myproducts" }}>
            <p>Meus Produtos</p>
          </Link>
        </div>
      </Modal>
    </header>
  );
};

export default Header;

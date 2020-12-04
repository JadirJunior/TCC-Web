import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Link, useHistory } from "react-router-dom";

import "./Styles/style.css";

import { LoginContext } from "../../../LoginContext";

Modal.setAppElement("#root");

const User = () => {
  const History = useHistory();
  const [login, setLogin] = useContext(LoginContext);

  return (
    <Modal
      className="modal-user"
      overlayClassName="overlay_modal-user"
      isOpen={true}
      onRequestClose={() => History.goBack()}
    >
      <div className="modal-right">
        <img src={login.IMAGEM} alt="" />
        <p>{login.USU_VEND_FIS}</p>
      </div>
      <div className="modal-left">
        <p>Meu Perfil</p>
        <p onClick={() => History.push({ pathname: "/myproducts", hash: "" })}>
          Meus Produtos
        </p>
      </div>
    </Modal>
  );
};

export default User;

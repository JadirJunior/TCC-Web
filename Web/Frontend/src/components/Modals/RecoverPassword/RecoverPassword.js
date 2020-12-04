import React from "react";
import Modal from "react-modal";

import "./Styles/style.css";

import { ReactComponent as CloseButton } from "../../../assets/closebutton.svg";

Modal.setAppElement("#root");

const RecoverPassword = (props) => {
  return (
    <Modal
      className="modal_recoverpassword"
      overlayClassName="overlay_modal"
      isOpen={props.state}
      onRequestClose={() => props.setstate(false)}
    >
      <div className="top">
        <h1>Recuperar Senha</h1>
        <CloseButton
          className="close_button"
          onClick={() => props.setstate(false)}
        />
      </div>
      <p className="middle">Enviaremos um email para redefinir sua senha</p>
      <div className="recuperar_senha">
        <div className="input">
          <p>Email</p>
          <input type="text" />
        </div>
        <div className="acessar">
          <button type="submit">Enviar</button>
        </div>
      </div>
    </Modal>
  );
};

export default RecoverPassword;

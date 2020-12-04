import React from "react";
import Modal from "react-modal";

import "./Styles/style.css";

import { ReactComponent as CloseButton } from "../../../assets/closebutton.svg";

Modal.setAppElement("#root");

const SignUp_Complementary = (props) => {
  return (
    <Modal
      className="modal_signupcomplementary"
      overlayClassName="overlay_modal"
      isOpen={props.state}
      onRequestClose={() => props.setstate(false)}
    >
      <div className="top">
        <h1>Complemente seu Cadastro</h1>
        <CloseButton
          className="close_button"
          onClick={() => props.setstate(false)}
        />
      </div>

      <div className="signup_complementary">
        <div className="input">
          <p>CPF</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Telefone</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Data de Nascimento</p>
          <input type="date" />
        </div>
        <div className="acessar">
          <button type="submit">Continuar</button>
        </div>
      </div>
    </Modal>
  );
};

export default SignUp_Complementary;

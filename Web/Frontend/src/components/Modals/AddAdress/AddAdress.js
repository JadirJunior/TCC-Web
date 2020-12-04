import React from "react";
import Modal from "react-modal";

import "./Styles/style.css";

import { ReactComponent as CloseButton } from "../../../assets/closebutton.svg";

Modal.setAppElement("#root");

const AddAdress = (props) => {
  return (
    <Modal
      className="modal_addadress"
      overlayClassName="overlay_modal"
      isOpen={props.state}
      onRequestClose={() => props.setstate(false)}
    >
      <div className="top">
        <h1>Adicionar Endereço</h1>
        <CloseButton
          className="close_button"
          onClick={() => props.setstate(false)}
        />
      </div>

      <div className="addadress">
        <div className="input">
          <p>CEP</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Cidade</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Estado</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Bairro</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Rua/Avenida</p>
          <input type="text" />
        </div>

        <div className="acessar">
          <button type="submit">Adicionar</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddAdress;

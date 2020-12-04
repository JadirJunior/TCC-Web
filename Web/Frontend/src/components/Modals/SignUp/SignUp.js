import React from "react";
import Modal from "react-modal";

import "./Styles/style.css";

import { ReactComponent as CloseButton } from "../../../assets/closebutton.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/google-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/facebook-icon.svg";
import { ReactComponent as ThickerLine } from "../../../assets/thickerline.svg";
import { ReactComponent as ThinnerLine } from "../../../assets/thinnerline.svg";
import { ReactComponent as Line } from "../../../assets/line.svg";

Modal.setAppElement("#root");

const SignUp = (props) => {
  return (
    <Modal
      className="modal"
      overlayClassName="overlay_modal"
      isOpen={props.state}
      onRequestClose={() => props.setstate(false)}
    >
      <div className="top">
        <h1>Cadastrar</h1>
        <CloseButton
          className="close_button"
          onClick={() => props.setstate(false)}
        />
      </div>
      <div className="other_login">
        <div className="google_login">
          <GoogleIcon />
          <p>Cadastrar com Google</p>
        </div>
        <div className="facebook_login">
          <FacebookIcon />
          <p>Cadastrar com Facebook</p>
        </div>
      </div>
      <div className="transition">
        <div className="lines">
          <ThickerLine />
          <ThinnerLine />
        </div>
        <p>OU</p>
        <div className="lines">
          <ThickerLine />
          <ThinnerLine />
        </div>
      </div>
      <div className="signup">
        <div className="input">
          <p>Nome Completo</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Email</p>
          <input type="text" />
        </div>
        <div className="input">
          <p>Senha</p>
          <input type="password" />
        </div>
        <div className="input">
          <p>Confirmar Senha</p>
          <input type="password" />
        </div>
        <div className="acessar">
          <button type="submit">CADASTRAR</button>
        </div>
      </div>
      <Line className="line" />
      <div className="final_modal">
        <p>
          Já possui uma conta?
          <p className="cadastre_modal">&nbsp; Acesse aqui</p>
        </p>
      </div>
    </Modal>
  );
};

export default SignUp;

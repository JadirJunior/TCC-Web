import React, { useContext, useState } from "react";
import Modal from "react-modal";

import "./Styles/style.css";

import { ReactComponent as CloseButton } from "../../../assets/closebutton.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/google-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/facebook-icon.svg";
import { ReactComponent as ThickerLine } from "../../../assets/thickerline.svg";
import { ReactComponent as ThinnerLine } from "../../../assets/thinnerline.svg";
import { ReactComponent as Line } from "../../../assets/line.svg";
import { useHistory, useLocation } from "react-router-dom";
import api from "../../../api";
import { LoginContext } from "../../../LoginContext";

Modal.setAppElement("#root");

const Login = () => {
  const History = useHistory();
  const [login, setLogin] = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const Logar = async () => {
    const response = await api.post("/login", {
      Email: email,
      Senha: senha,
    });

    if (response.data.error) {
      setErro("Email ou senha inválidos!");
    } else {
      setLogin(response.data);
      History.push("");
    }
    console.log(response.data);
  };

  return (
    <Modal
      className="modal_login"
      overlayClassName="overlay_modal"
      isOpen={true}
    >
      <div className="top">
        <h1>Login</h1>
        <CloseButton
          className="close_button"
          onClick={() => History.push("")}
        />
      </div>
      <div className="other_login">
        <div className="google_login">
          <GoogleIcon />
          <p>Faça login com Google</p>
        </div>
        <div className="facebook_login">
          <FacebookIcon />
          <p>Faça login com Facebook</p>
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
      <div className="login">
        <div className="email">
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="senha">
          <p>Senha</p>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <p className="erro">{erro}</p>
        </div>

        <div className="acessar">
          <button type="submit" onClick={Logar}>
            ACESSAR
          </button>
          <p>Esqueceu sua senha?</p>
        </div>
      </div>
      <Line className="line" />
      <div className="final_modal">
        <p>
          Não possui uma conta?
          <p className="cadastre_modal">&nbsp; Cadastre-se Aqui</p>
        </p>
      </div>
    </Modal>
  );
};

export default Login;

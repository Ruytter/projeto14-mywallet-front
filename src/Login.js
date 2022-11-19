import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sign(props) {
  const navigate = useNavigate();
  const { classe } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confimpass, setConfimpass] = useState("");

  function Cadastrar(e) {
    e.preventDefault();
    navigate(`/`);
  }

  function Entrar(e) {
    e.preventDefault();
  }

  return (
    <Main>
      <header>
        <p>MyWallet</p>
      </header>
      <section>
        <input
          className={classe}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          id="email"
          nome="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          id="pass"
          nome="pass"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          className={classe}
          type="password"
          id="confirmpass"
          nome="confirmpass"
          value={senha}
          onChange={(e) => setConfimpass(e.target.value)}
          placeholder="Confirme a senha"
          required
        />
        <button
          className={classe === "hide" ? "" : "hide"}
          onClick={(e) => Entrar(e)}
        >
          Entrar
        </button>
        <button className={classe} onClick={(e) => Cadastrar(e)}>
          Cadastrar
        </button>
      </section>
      <footer>
        <Link to={`/sign-up`}>
          <p className={classe === "hide" ? "" : "hide"}>
            Primeira vez? Cadastre-se!
          </p>
        </Link>
        <Link to={`/`}>
          <p className={classe}>Já tem uma conta? Entre agora!</p>
        </Link>
      </footer>
    </Main>
  );
}

const Main = styled.div`
  width: 414px;
  height: 700px;
  margin: -75px auto;
  background: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  footer {
    width: 80%;
    text-align: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    button {
      width: 155px;
      height: 114px;
      padding: 5px;
      font-size: 17px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      text-align: start;
      color: white;
    }
  }
`;

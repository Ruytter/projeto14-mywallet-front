import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sign(props) {
  const { signin } = useContext(AuthContext)
  const navigate = useNavigate();
  const { classe } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [confirmpass, setConfimpass] = useState("");

  function Cadastrar(e) {
    e.preventDefault();
    if(password !== confirmpass){
      return alert("As senha devem ser iguais")
    }
    const URL =
            "http://localhost:5000/sign-up";
      const body = {
        name,
        email,
        password
      };
      const promise = axios.post(URL, body);
      promise.then((user) => {
        console.log(user.data)
     });
    promise.catch((err) => {
      console.log(err.response.data);
    });
    navigate(`/`);
  }
  function Entrar(e) {
    e.preventDefault();
    const URL =
            "http://localhost:5000/";
      const body = {
        email,
        password
      };
      const promise = axios.post(URL, body,);
      promise.then((user) => {
        signin(user.data)
     });
    promise.catch((err) => {
      console.log(err.response.data);
    });
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
          value={password}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          className={classe}
          type="password"
          id="confirmpass"
          nome="confirmpass"
          value={confirmpass}
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

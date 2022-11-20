import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Registrar(props) {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { classe }= props
  const [name, setName] = useState("");
  const token = user.u.token;
  

  function Entrada(e) {
    e.preventDefault();

    navigate("/saldo")
  }

  function Saida(e) {
    e.preventDefault();

    navigate("/saldo")
  }

  return (
    <Main>
      <span>
        <p className={classe}>Nova entrada</p>
        <p className={classe === "hide" ? "" : "hide"}>Nova saida</p>
      </span>
      <section>
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Descrição"/>
        <button className={classe} onClick={(e) => Entrada(e) }>Salvar entrada</button>
        <button className={classe === "hide" ? "" : "hide"} onClick={(e) => Saida(e) }>Salvar saída</button>
      </section>
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
  justify-content: flex-start;
  align-items: center;
`;
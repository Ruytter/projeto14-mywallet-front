import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Registrar(props) {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { classe }= props
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  

  function Entrada(e) {
    e.preventDefault();
    if (valor === ""){
      return alert("O Valor não pode ser vazio")
    }
    const URL =
            "http://localhost:5000/entrada";
      const body = {
        entrada: valor,
        descricao
      };
      const promise = axios.post(URL, body,
        {headers: {
          'Authorization': `Bearer ${user.u.token}`
        }});
      promise.then((status) => {
        console.log(status)
     });
    promise.catch((err) => {
      console.log(err.response.data);
    });

    navigate("/saldo")
  }

  function Saida(e) {
    e.preventDefault();
    if (valor === ""){
      return alert("O Valor não pode ser vazio")
    }

    const URL =
            "http://localhost:5000/saida";
      const body = {
        saida: valor,
        descricao
      };
      const promise = axios.post(URL, body,
        {headers: {
          'Authorization': `Bearer ${user.u.token}`
        }});
      promise.then((status) => {
        console.log(status)
     });
    promise.catch((err) => {
      console.log(err.response.data);
    });

    navigate("/saldo")
  }

  return (
    <Main>
      <span>
        <p className={classe}>Nova entrada</p>
        <p className={classe === "hide" ? "" : "hide"}>Nova saida</p>
      </span>
      <section>
        <input type="number" 
        id="valor"
        name="valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor" />
        <input type="text" 
        id="descricao"
        name="descricao"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"/>
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
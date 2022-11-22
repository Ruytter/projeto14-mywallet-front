import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Fluxo() {
  const localUser = JSON.parse(localStorage.getItem("mywalletUser"));
  const [classe, setClasse] = useState("hide");
  const [fluxo, setFluxo] = useState({});
  const [saldo, setSaldo] = useState(0);
  const [poun, setPoun] = useState();

  useEffect(() => {
    const URL = `http://localhost:5000/fluxo`;

    const promisse = axios.get(URL, {
      headers: {
        Authorization: `Bearer ${localUser.token}`,
      },
    });

    promisse.then((res) => {
      const entradas = res.data.entradas;
      const saidas = res.data.saidas;
      if (entradas.length !== 0 || saidas.length !== 0) {
        let somaEntradas = 0;
        let somaSaidas = 0;
        if (entradas.length !== 0) {
          entradas.forEach(
            (entrada) => (somaEntradas += Number(entrada.entrada))
          );
        }

        if (saidas.length !== 0) {
          saidas.forEach((saida) => (somaSaidas += Number(saida.saida)));
        }

        const saldo = somaEntradas - somaSaidas;
        if (saldo < 0) {
          setPoun("red");
        } else {
          setPoun("verde");
        }
        setSaldo(saldo);
        setFluxo(res.data);
        setClasse("");
      }
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, [localUser]);

  return (
    <Main>
      <span>
        <p>olá, {localUser.user}</p>
        <Link to={"/"}>
          <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </span>
      <section>
        <div>
          <ul className={classe}>
            {fluxo.saidas &&
              fluxo.saidas.map((saida, index) => (
                <li key={index}>
                  <p>
                    {saida.date}
                    <b> {saida.descricao}</b>
                  </p>
                  <p className="red"> {saida.saida}</p>
                </li>
              ))}

            {fluxo.entradas &&
              fluxo.entradas.map((entrada, index) => (
                <li key={index}>
                  <p>
                    {entrada.date}
                    <b> {entrada.descricao}</b>
                  </p>
                  <p className="verde"> {entrada.entrada}</p>
                </li>
              ))}
            <li className="saldo">
              <h3>SALDO</h3> <p className={poun}>{saldo}</p>
            </li>
          </ul>
          <p className={classe === "hide" ? "" : "hide"}>
            Não há registros de
            <br />
            entrada ou saída
          </p>
        </div>
      </section>
      <footer>
        <Link to={"/entrada"}>
          <button>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              entrada
            </p>
          </button>
        </Link>
        <Link to={"/saida"}>
          <button>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              saída
            </p>
          </button>
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
  section {
    background-color: white;
    b {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }
  }
`;

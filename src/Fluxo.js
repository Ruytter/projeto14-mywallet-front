import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Fluxo() {
  const [classe, setClasse] = useState("hide");
  const [name, setName] = useState("");

  return (
    <Main>
      <span>
        <p>Olá, Fulano</p>
        <Link to={"/"}>
        <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </span>
      <section>
        <div>
          <ul className={classe}>
            <li>
              <p>30/11 Almoço mãe</p> <p> 39,90</p>
            </li>
            <li>
              <p>27/11 Mercado</p> <p> 542,54</p>
            </li>
            <li>
              <p>26/11 Compras churrasco</p> <p> 67,60</p>
            </li>
            <li>
              <p>20/11 Empréstimo Maria</p> <p> 500,00</p>
            </li>
            <li>
              <p>15/11 Salário</p> <p> 3000,00</p>
            </li>
            <li class="saldo">
              <h3>SALDO</h3> <p>2849,96</p>
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
  }
`;

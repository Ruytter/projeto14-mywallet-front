import Sign from "./Login";
import Fluxo from "./Fluxo";
import Registrar from "./Registrar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./auth.js";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Sign classe="hide" />}></Route>
            <Route path="/sign-up" element={<Sign />}></Route>
            <Route path="/saldo" element={<Fluxo />}></Route>
            <Route path="/entrada" element={<Registrar />}></Route>
            <Route path="/saida" element={<Registrar classe="hide" />}></Route>
          </Routes>
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
const Container = styled.div`
  width: 414px;
  min-height: 600px;
  margin: 75px auto;
`;

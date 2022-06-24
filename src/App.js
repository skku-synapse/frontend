import "./App.css";
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header.js";
import Contents from "./components/Contents";

const Container = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
`;

const Center = styled.div`
  width: ${(props) => props.theme.pageWidth};
  height: max-content;
  margin: 0 auto;
  padding: 20px 10px;

  @media screen and (max-width: ${(props) => props.theme.pageWidth}) {
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <Center>
        <Contents />
      </Center>
    </Container>
  );
}

export default App;

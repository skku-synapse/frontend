import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header.js";
import Contents from "./components/Contents";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Container = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
`;

const Center = styled.div`
  // width: ${(props) => props.theme.pageWidth};
  height: max-content;
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.pageWidth}) {
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Center>
          <Contents />
        </Center>
      </Container>
    </ThemeProvider>
  );
}

export default App;

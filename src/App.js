import logo from "./logo.svg";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header.js";

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
      <Center>hello</Center>
    </Container>
  );
}

export default App;

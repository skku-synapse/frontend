import styled from "styled-components";
import { Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px 0px;

  background-color: #161616;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  @media (max-width: 1080px) {
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5em;
  color: #fff;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: ${(props) => props.theme.headerHeight};
  height: ${(props) => props.theme.headerHeight};
  margin: 0 10px;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Anomaly Detection Simulator</Title>
      </InnerContainer>
      <Divider />
    </Container>
  );
};

export default Header;

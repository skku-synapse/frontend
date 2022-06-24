import styled from "styled-components";
import React from 'react'

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 10px 0px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 3px 10px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  @media (max-width: 1080px) {
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: ${(props) => props.theme.pageWidth};
  font-weight: bold;
  font-size: large;
`;

const Logo = styled.img`
  width: ${(props) => props.theme.headerHeight};
  height: ${(props) => props.theme.headerHeight};
  margin: 0px 10px;
`;

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo src="logo.png" alt="logo" />
        <Title>Anomaly Detection Simulator</Title>
      </InnerContainer>
    </Container>
  );
};

export default Header;

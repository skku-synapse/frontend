import React, { useState } from "react";
import ModelSelector from "./ModelSelector";
import styled from "styled-components";
import Visualization from "./Visualization";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  //justify-content: space-evenly;
`;

const LeftContents = styled.div``;
const CenterContents = styled.div`
  margin: 0px 10px;
`;
const RightContents = styled.div``;

const Contents = () => {
  const [model, setModel] = useState("CFLOW-AD");

  return (
    <Container>
      <LeftContents>
        <ModelSelector setModel={setModel} />
      </LeftContents>
      <CenterContents>
        <Visualization model={model} />
      </CenterContents>
    </Container>
  );
};

export default Contents;

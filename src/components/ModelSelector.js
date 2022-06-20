import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 200px;
  padding: 10px;
`;
const Selector = styled.div``;

const RadioBtn = styled.input`
  cursor: pointer;
`;
const Model = styled.div`
  width: 100%;
  margin: 2px;
`;
const ModelName = styled.label`
  cursor: pointer;
`;
const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModelSelector = () => {
  const [model, setModel] = useState("CFLOW-AD");

  const onChange = (e) => {
    setModel(e.target.id);
  };

  return (
    <Container>
      <Selector>
        <Title>Model</Title>
        <Model>
          <RadioBtn
            id="CFLOW-AD"
            name="model"
            type="radio"
            defaultChecked
            onChange={onChange}
          />
          <ModelName for="CFLOW-AD">CFLOW-AD</ModelName>
        </Model>
        <Model>
          <RadioBtn
            id="CS-Flow"
            name="model"
            type="radio"
            onChange={onChange}
          />
          <ModelName for="CS-Flow">CS-Flow</ModelName>
        </Model>
        <Model>
          <RadioBtn
            id="PatchCore"
            name="model"
            type="radio"
            onChange={onChange}
          />
          <ModelName for="PatchCore">PatchCore</ModelName>
        </Model>
        <Model>
          <RadioBtn
            id="FastFlow"
            name="model"
            type="radio"
            onChange={onChange}
          />
          <ModelName for="FastFlow">FastFlow</ModelName>
        </Model>
      </Selector>
    </Container>
  );
};

export default ModelSelector;

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
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

const DatasetSelector = ({ setDataset }) => {
  const onChange = (e) => {
    setDataset(e.target.id);
  };

  return (
    <Container>
      <Selector>
        <Title>Dataset</Title>
        <Model>
          <RadioBtn
            id="module"
            name="dataset"
            type="radio"
            disabled
            onChange={onChange}
          />
          <ModelName for="module">카메라 모듈</ModelName>
        </Model>
        <Model>
          <RadioBtn
            id="lens"
            name="dataset"
            type="radio"
            onChange={onChange}
            defaultChecked
          />
          <ModelName for="lens">카메라 렌즈</ModelName>
        </Model>
        <Model>
          <RadioBtn
            id="flex"
            name="dataset"
            type="radio"
            onChange={onChange}
          />
          <ModelName for="flex">FLEX</ModelName>
        </Model>
      </Selector>
    </Container>
  );
};

export default DatasetSelector;

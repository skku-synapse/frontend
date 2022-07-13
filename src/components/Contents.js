import React, { useState } from "react";
import ModelSelector from "./ModelSelector";
import styled from "styled-components";
import Visualization from "./Visualization";
import DatasetSelector from "./DatasetSelector";
import DataSelector from "./DataSelector";

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
  const [dataset, setDataset] = useState("lens");
  const [imgPath, setImgPath] = useState();

  return (
    <Container>
      <LeftContents>
        <ModelSelector setModel={setModel} />
      </LeftContents>
      <CenterContents>
        <Visualization model={model} dataset={dataset} img_path={imgPath}/>
      </CenterContents>
      <RightContents>
        <DatasetSelector setDataset={setDataset}/>
        <DataSelector dataset={dataset} setImgPath={setImgPath} imgPath={imgPath}/>
      </RightContents>
    </Container>
  );
};

export default Contents;

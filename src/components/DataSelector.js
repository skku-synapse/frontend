import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  height: 61vh;
`;
const Selector = styled.div``;

const RadioBtn = styled.input`
  cursor: pointer;
`;
const DataList = styled.div`
  width: 100%;
  height: 27vh;
  margin: 2px;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width: 6px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb{
     height: 17%;
     background-color: rgba(200, 200, 200, 1);
     border-radius: 10px;    
  }
  
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
const DataName = styled.div`
  font-size: small;
  padding: 5px;
  border-bottom: 1px lightgray solid;
  cursor: pointer;
  background-color: ${props => props.checked ? "lightgray" : null}
`;

const DataSelector = ({dataset, setImgPath, imgPath}) => {
  const [okList, setOkList] = useState([])
  const [ngList, setNgList] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://115.145.212.100:51122/getDataList',
      params: {
        'dataset': dataset
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response)
      setNgList(response.data.ng)
      setOkList(response.data.ok)
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  }, [dataset])

  const onClick = (e) => {
    console.log(e.target.innerText)
    setImgPath(e.target.innerText)
  }

  return (
    <Container>
      <Selector>
        <Title>OK Data List</Title>
        <DataList>
          {okList && okList.map((name, idx)=> {
            if (name === imgPath)
              return <DataName key={"ok"+idx} onClick={onClick} checked={true}>{name}</DataName>
            return <DataName key={"ok"+idx} onClick={onClick} checked={false}>{name}</DataName>
          })}
        </DataList>
        <Title>NG Data List</Title>
        <DataList>
          {ngList && ngList.map((name, idx)=> {
            if (name == imgPath)
              return <DataName key={"ng"+idx} onClick={onClick} checked={true}>{name}</DataName>
            return <DataName key={"ng"+idx} onClick={onClick} checked={false}>{name}</DataName>
          })}
        </DataList>
      </Selector>
    </Container>
  );
};

export default DataSelector;

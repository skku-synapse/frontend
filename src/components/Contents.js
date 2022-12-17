import React, { useState, useEffect } from "react";
import ModelSelector from "./ModelSelector";
import styled, { ThemeConsumer } from "styled-components";
import Visualization from "./Visualization";
import DatasetSelector from "./DatasetSelector";
import Test from "./Test";
import Analysis from "./Analysis";
import axios from "axios";
import { Box, Card, Typography, Divider } from "@mui/material";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  //justify-content: space-evenly;
`;

const LeftContents = styled.div`
  padding-top: 8px;
`;
const CenterContents = styled.div`
  margin: 0px 30px;
`;
const RightContents = styled.div``;

const Contents = () => {
  const [model, setModel] = useState("CS-Flow");
  const [dataset, setDataset] = useState("lens");
  const [isTest, setIsTest] = useState(false);
  const [dataNames, setDataNames] = useState([]);
  const [index, setIndex] = useState(-1);
  const [numOfData, setNumOfData] = useState(0);
  const [isHitmapOn, sethitmapOn] = useState(false);
  const [dataInfos, setDataInfos] = useState([]);
  const [counter, setCounter] = useState({
    TP: 0,
    TN: 0,
    FP: 0,
    FN: 0,
  });
  //const [classes, setClasses] = useState([]);
  //const [scores, setScores] = useState([]);
  const [histogram, setHistogram] = useState();
  const [isAnalysis, setIsAnalysis] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  let classes = [];
  let scores = [];

  useEffect(() => {
    setIsLoaded(false);
    setIsTest(false);
    axios({
      method: "get",
      url: "http://115.145.212.100:51122/getAllData",
      params: {
        dataset: dataset,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        setDataNames(response.data.list);
        setDataInfos([]);
        setCounter({
          TP: 0,
          TN: 0,
          FP: 0,
          FN: 0,
        });
        setNumOfData(response.data.list.length);
        setIsLoaded(true);
        setIndex(0);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [dataset]);

  useEffect(() => {
    if (isTest) {
      axios({
        method: "get",
        url: "http://115.145.212.100:51122/predict",
        params: {
          model: model,
          dataset: dataset,
          img_name: dataNames[index],
        },
        //data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response);

          response.data.image = "data:;base64," + response.data.image;
          response.data.overlay = "data:;base64," + response.data.overlay;

          dataInfos.push(response.data);
          // console.log(response.data);

          if (dataNames[index][0] === "O" && !response.data.isAnomaly)
            counter.TP += 1;
          else if (dataNames[index][0] == "O") counter.FN += 1;
          else if (response.data.isAnomaly) counter.TN += 1;
          else counter.FP += 1;

          setCounter(counter);

          if (dataNames[index][0] === "O") classes.push(0);
          else classes.push(1);

          //setClasses(classes);

          scores.push(response.data.anomaly_scores);

          //setScores(scores);

          setIndex(index + 1);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  }, [index, isTest]);

  useEffect(() => {
    if (isAnalysis) {
      console.log("hhh");
      axios({
        method: "get",
        url: "http://115.145.212.100:51122/getHistogram",
        params: {
          model: model,
          dataset: dataset,
        },
        //data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          setHistogram("data:;base64," + response.data.image);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  }, [index]);

  return (
    <Container>
      <Card
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <Typography sx={{ padding: 1 }} variant="h6" component="div">
          Detection Setting
        </Typography>
        <Divider />
        <ModelSelector model={model} setModel={setModel} />
        <DatasetSelector
          dataset={dataset}
          setDataset={setDataset}
          isTest={isTest}
        />
        <Test
          isTest={isTest}
          setIsTest={setIsTest}
          isHitmapOn={isHitmapOn}
          setHitmapOn={sethitmapOn}
          index={index}
          numOfData={numOfData}
          dataLength={dataInfos.length}
          setIsAnalysis={setIsAnalysis}
          dataInfos={dataInfos}
          isLoaded={isLoaded}
        />
      </Card>
      <CenterContents>
        <Visualization
          index={index}
          dataInfos={dataInfos}
          isHitmapOn={isHitmapOn}
        />
      </CenterContents>
      <RightContents>
        {isAnalysis ? (
          <Analysis
            counter={counter}
            dataInfos={dataInfos}
            isAnalysis={isAnalysis}
            histogram={histogram}
          />
        ) : null}
      </RightContents>
    </Container>
  );
};

export default Contents;

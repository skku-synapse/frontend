import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  Stack,
  Button,
  Divider,
  Typography,
  LinearProgress,
  Switch,
} from "@mui/material";
import styled from "styled-components";
import LinearProgressWithLabel from "./Line";

const Container = styled.div`
  border: 2px solid gray;
  width: 200px;
  padding: 10px;
  height: 335px;
`;

const Btns = styled.div``;

const TestProgress = styled.div``;

const Operator = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
`;

// const Button = styled.div`
//   width: 100%;
//   text-align: center;
//   margin-bottom: 10px;
// `;

const LabelButton = styled.div`
  width: 100%;
  margin: 10px 0px;
  text-align: center;
`;

const Btn = styled.input`
  cursor: pointer;
  width: 200px;
  height: 40px;
  border: 1px solid gray;
  font-weight: bold;
  font-size: 20px;
  background-color: #bfbfbf;

  &:hover {
    opacity: 0.8;
  }
`;

const RadioBtn = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;

  //드래그방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Test = ({
  isTest,
  setIsTest,
  isHitmapOn,
  setHitmapOn,
  index,
  numOfData,
  dataLength,
  setIsAnalysis,
  dataInfos,
  isLoaded,
}) => {
  const [btnLabel, setBtnLabel] = useState("Test Start");

  const onHandleClick = (e) => {
    setIsTest(!isTest);
  };

  const onClickHitmap = () => {
    setHitmapOn(!isHitmapOn);
    console.log(isHitmapOn);
  };

  const onClickAnalyze = () => {
    setIsAnalysis(false);
    setIsAnalysis(true);
  };

  useEffect(() => {
    if (index > 0 && index !== numOfData) setBtnLabel("Resume");
    else setBtnLabel("Test Start");
  }, [index, numOfData]);

  return (
    <Box>
      <Btns>
        <LabelButton>
          <FormControlLabel
            control={
              <Switch
                checked={isHitmapOn}
                onChange={onClickHitmap}
                label="localization"
              />
            }
            label="localization"
          />
        </LabelButton>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            value={isTest ? "Pause" : btnLabel}
            onClick={onHandleClick}
            disabled={!isLoaded}
          >
            {isTest ? "Pause" : btnLabel}
          </Button>
          <Button variant="contained" value="Analyze" onClick={onClickAnalyze}>
            Analyze
          </Button>
        </Stack>
      </Btns>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        {isTest ? (
          <div>
            <LinearProgressWithLabel value={(dataLength / numOfData) * 100} />
            {index > 0 && dataInfos[index - 1] ? (
              <div>
                inference time per image: {dataInfos[index - 1].time.toFixed(0)}
                msec
              </div>
            ) : null}
          </div>
        ) : (
          <Typography>Press Button</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Test;

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import CropDinIcon from "@mui/icons-material/CropDin";
import { Box, Divider, Typography } from "@mui/material";

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  margin-top: 3px;
`;

const ImgWrapper = styled.div`
  width: 205px;
  height: 205px;
  border: 5px solid #f6f7f9;
  border-radius: 3px;
  border-color: ${(props) =>
    props.isCorrect ? props.theme.customGray : "red"};
  border-color: ${(props) =>
    props.isCorrect === "blank" ? props.theme.customGray : null}
  margin: 7px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Speed = styled.div`
  background-color: white;
  color: black;
  padding: 1px 5px;
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const Label = styled.div`
  padding: 1px 5px;
  background-color: white;
  position: absolute;
  top: -22px;
  left: 65px;
  border: 5px solid;
  font-weight: bold;
  border-color: ${(props) => (props.label === "OK" ? "ForestGreen" : "Red")};
  color: black;
`;

const InnerContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  heigth: 100%;
  border-radius: 3px;
`;

const Prediction = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: ${(props) => (!props.isAnomaly ? "ForestGreen" : "Red")};
`;

const ColorLabel = styled.div`
  width: 17px;
  height: 17px;
  margin: 3px 2px 0px 3px;
  background-color: ${(props) => props.color};
`;

const Visualization = ({ index, dataInfos, isHitmapOn }) => {
  const DEFAULT_MESSAGE = "";
  const LOADING_MESSAGE = "Loading . . .";
  const [result, setResult] = useState(DEFAULT_MESSAGE);

  console.log(dataInfos.length);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CropDinIcon sx={{ color: "red" }} />
        <Typography sx={{ marginRight: 1, color: "#fff" }}>
          : Prediction Error
        </Typography>
        <ColorLabel color="ForestGreen" />
        <Typography sx={{ marginRight: 1, color: "#fff" }}>: Normal</Typography>
        <ColorLabel color="red" />
        <Typography sx={{ marginRight: 1, color: "#fff" }}>: Anomal</Typography>
        {/* <CropDinIcon sx={{ color: "ForestGreen" }} />
        <Typography>: Predicted OK</Typography> */}
      </Box>
      <Container>
        {index >= 1 && dataInfos[index - 1] ? (
          <ImgWrapper
            isCorrect={
              (dataInfos[index - 1].isAnomaly &&
                dataInfos[index - 1].label === "NG") ||
              (!dataInfos[index - 1].isAnomaly &&
                dataInfos[index - 1].label == "OK")
            }
          >
            <Prediction isAnomaly={dataInfos[index - 1].isAnomaly} />
            {isHitmapOn ? (
              <Image src={index >= 1 ? dataInfos[index - 1].overlay : null} />
            ) : (
              <Image src={index >= 1 ? dataInfos[index - 1].image : null} />
            )}
          </ImgWrapper>
        ) : (
          <ImgWrapper isCorrect="blank" />
        )}

        {index >= 2 && dataInfos[index - 2] ? (
          <ImgWrapper
            isCorrect={
              (dataInfos[index - 2].isAnomaly &&
                dataInfos[index - 2].label === "NG") ||
              (!dataInfos[index - 2].isAnomaly &&
                dataInfos[index - 2].label == "OK")
            }
          >
            <Prediction isAnomaly={dataInfos[index - 2].isAnomaly} />
            {isHitmapOn ? (
              <Image src={index >= 2 ? dataInfos[index - 2].overlay : null} />
            ) : (
              <Image src={index >= 2 ? dataInfos[index - 2].image : null} />
            )}
          </ImgWrapper>
        ) : (
          <ImgWrapper isCorrect="blank" />
        )}

        {index >= 3 && dataInfos[index - 3] ? (
          <ImgWrapper
            isCorrect={
              (dataInfos[index - 3].isAnomaly &&
                dataInfos[index - 3].label === "NG") ||
              (!dataInfos[index - 3].isAnomaly &&
                dataInfos[index - 3].label == "OK")
            }
          >
            <Prediction isAnomaly={dataInfos[index - 3].isAnomaly} />
            {isHitmapOn ? (
              <Image src={index >= 3 ? dataInfos[index - 3].overlay : null} />
            ) : (
              <Image src={index >= 3 ? dataInfos[index - 3].image : null} />
            )}
          </ImgWrapper>
        ) : (
          <ImgWrapper isCorrect="blank" />
        )}

        {index >= 4 && dataInfos[index - 4] ? (
          <ImgWrapper
            isCorrect={
              (dataInfos[index - 4].isAnomaly &&
                dataInfos[index - 4].label === "NG") ||
              (!dataInfos[index - 4].isAnomaly &&
                dataInfos[index - 4].label == "OK")
            }
          >
            <Prediction isAnomaly={dataInfos[index - 4].isAnomaly} />
            {isHitmapOn ? (
              <Image src={index >= 4 ? dataInfos[index - 4].overlay : null} />
            ) : (
              <Image src={index >= 4 ? dataInfos[index - 4].image : null} />
            )}
          </ImgWrapper>
        ) : (
          <ImgWrapper isCorrect="blank" />
        )}
      </Container>
    </>
  );
};

export default Visualization;

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 5px;
  background-color: rgb(170, 170, 170);
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  //box-shadow: 2px 2px 10px 10px gray;
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

const DatasetSelector = ({ dataset, setDataset, isTest }) => {
  const onChange = (e) => {
    setDataset(e.target.id);
  };

  const onHandleChange = (e) => {
    setDataset(e.target.value);
  };

  return (
    <Box sx={{ padding: 2, margin: 1 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Dataset</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={dataset}
          onChange={onHandleChange}
        >
          <FormControlLabel
            value="lens"
            control={<Radio />}
            label="LENS"
            disabled={isTest}
          />
          <FormControlLabel
            value="flex"
            control={<Radio />}
            label="FLEX"
            disabled={isTest}
          />
          <FormControlLabel
            value="module"
            control={<Radio />}
            label="SMT"
            disabled={isTest}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default DatasetSelector;

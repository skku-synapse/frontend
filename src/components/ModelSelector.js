import React, { useState } from "react";
import {
  Box,
  FormLabel,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@mui/material";
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

const ModelSelector = ({ model, setModel }) => {
  const onHandleChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <Box sx={{ padding: 1, margin: 1 }}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Model</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={model}
          onChange={onHandleChange}
        >
          <FormControlLabel
            value="CS-Flow"
            control={<Radio />}
            label="CS-Flow"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ModelSelector;

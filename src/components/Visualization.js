import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 530px;
`;

const ImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileInput = styled.input`
  display: none;
`;

const Text = styled.label`
  color: gray;
  font-size: small;
  font-weight: bold;
`;

const Result = styled.div`
  font-weight: bold;
  font-size: xx-large;
  color: ${props => props.result == "OK" ? "blue" : "red"};
  text-align: center;
  margin-top: -17px;
`;

const InnerContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const Visualization = ({ model, dataset, img_path }) => {
  const DEFAULT_MESSAGE = "이미지를 선택하세요"
  const LOADING_MESSAGE = "Loading . . ."
  const inputFileRef = useRef();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [result, setResult] = useState(DEFAULT_MESSAGE);

  const onClick = () => {
    //inputFileRef.current.click();
  };

  useEffect(() => {

    if(img_path && result != LOADING_MESSAGE){
      setResult(LOADING_MESSAGE)
      axios({
        method: 'get',
        url: 'http://115.145.212.100:51122/getImage',
        params: {
          'dataset': dataset,
          'img_name': img_path
        },
        //data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setFile('data:;base64,' + response.data.image)
        
        //console.log('data:;base64,' + response.data.image)
      })
      .catch((error) => {
        console.log("aa")
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

      axios({
        method: 'get',
        url: 'http://115.145.212.100:51122/predict',
        params: {
          'model': model,
          'dataset': dataset,
          'img_name': img_path
        },
        //data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        const isAnomaly = response.data.isAnomaly
        if(isAnomaly){
          setResult("NG")
        } else{
          setResult("OK")
        }
        console.log(response)
      })
      .catch((error) => {
        console.log("aa")
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    }
  
  }, [img_path])
  

  const onChangeImg = (e) => {
    e.preventDefault();
    
    if(e.target.files[0]){
      console.log(e)
      setResult(LOADING_MESSAGE)
      axios({
        method: 'get',
        url: 'http://115.145.212.100:51122/predict',
        params: {
          'model': model,
          'dataset': dataset,
          'img_name': img_path
        },
        //data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        const isAnomaly = response.data.isAnomaly
        if(isAnomaly){
          setResult("NG")
        } else{
          setResult("OK")
        }
        console.log(response)
      })
      .catch((error) => {
        console.log("aa")
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
      
    }
  }

  return (
    <Container>
      <InnerContainer>
        <ImgWrapper onClick={onClick}>
          {file ? (
            <Image src={file} alt="input image" />
          ) : (
            <Text>{DEFAULT_MESSAGE}</Text>
          )}
        </ImgWrapper>
      </InnerContainer>
      <FileInput
        name='img'
        id="img"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={onChangeImg}
        ref={inputFileRef}
      />
      {result !== DEFAULT_MESSAGE && result !== LOADING_MESSAGE ? 
        <Result result={result}>
        <Text>예측 결과</Text><br/>
        {result}
        </Result> : null}

      {result === LOADING_MESSAGE ? <Text>{result}</Text> : null}
    </Container>
  );
};

export default Visualization;

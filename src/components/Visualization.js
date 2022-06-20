import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const Text = styled.label`
  color: gray;
  font-size: small;
  font-weight: bold;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  text-align: center;
`;

const Visualization = () => {
  const inputFileRef = useRef();
  const [imgUrl, setImgUrl] = useState("");

  const onClick = () => {
    inputFileRef.current.click();
  };

  const onChange = (e) => {
    // 일단 public에 있는 이미지만 선택됨
    console.log(e.target.files[0].name);
    setImgUrl(e.target.files[0].name);
  };

  return (
    <Container>
      <InnerContainer>
        {imgUrl}
        <ImgWrapper onClick={onClick}>
          {imgUrl ? (
            <img src={imgUrl} alt="input image" />
          ) : (
            <Text>파일 선택</Text>
          )}
        </ImgWrapper>
      </InnerContainer>
      <InnerContainer>
        {imgUrl ? "Prediction: NG" : ""}
        <ImgWrapper />
        <FileInput
          id="img-input"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChange}
          ref={inputFileRef}
        />
      </InnerContainer>
    </Container>
  );
};

export default Visualization;

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

const Visualization = ({ model }) => {
  const inputFileRef = useRef();
  const [imgUrl, setImgUrl] = useState("");
  const [profileData, setProfileData] = useState({ name: "none" });
  //const [predictFunction, setPredictFunction] = useState(getData);

  const onClick = () => {
    inputFileRef.current.click();
  };

  const onChange = (e) => {
    // 일단 public에 있는 이미지만 선택됨
    console.log(e.target.files[0].name);
    setImgUrl(e.target.files[0].name);
  };

  const predict = () => {
    switch (model) {
      case "CFLOW-AD":
        getCFlowAdData();
        console.log("aa");
        break;
      case "CS-Flow":
        getCSFlowData();
        break;
      case "PatchCore":
        getPatchCoreData();
        break;
      case "FastFlow":
        getFastFlowData();
      default:
        break;
    }
  };
  /*
  useEffect(() => {
    switch (model) {
      case "CFLOW-AD":
        setPredictFunction(getCFlowAdData);
        console.log("aa");
        break;
      case "CS-Flow":
        setPredictFunction(getCSFlowData);
        break;
      case "PatchCore":
        setPredictFunction(getPatchCoreData);
        break;
      case "FastFlow":
        setPredictFunction(getFastFlowData);
      default:
        break;
    }
  }, [model]);
*/
  const getData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/",
    })
      .then((response) => {
        console.log(response);
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
        //console.log(res.name)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const getCSFlowData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/",
    })
      .then((response) => {
        console.log("CSFlow Func");
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
        //console.log(res.name)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const getCFlowAdData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/",
    })
      .then((response) => {
        console.log("CFLOW-AD func");
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
        //console.log(res.name)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const getPatchCoreData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/",
    })
      .then((response) => {
        console.log("PatchCore func");
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
        //console.log(res.name)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  const getFastFlowData = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5001/",
    })
      .then((response) => {
        console.log("FastFlow func");
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
        //console.log(res.name)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
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
      <button onClick={predict}>test</button>
      {profileData.profile_name}

      {/* <InnerContainer>
        {imgUrl ? "Prediction: NG" : ""}
        <ImgWrapper />
        
      </InnerContainer> */}
      <FileInput
        id="img-input"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={onChange}
        ref={inputFileRef}
      />
    </Container>
  );
};

export default Visualization;

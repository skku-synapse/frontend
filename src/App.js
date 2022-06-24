import "./App.css";
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header.js";
import Contents from "./components/Contents";
import axios from "axios"

const Container = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
`;

const Center = styled.div`
  width: ${(props) => props.theme.pageWidth};
  height: max-content;
  margin: 0 auto;
  padding: 20px 10px;

  @media screen and (max-width: ${(props) => props.theme.pageWidth}) {
  }
`;

function App() {

  const [profileData, setProfileData] = useState(null)

  function getData() {
  axios({
    method: "GET",
    url:"http://127.0.0.1:5001/",
  })
  .then((response) => {
    console.log(response);
    const res =response.data
    setProfileData(({
      profile_name: res.name,
      about_me: res.about}))
    //console.log(res.name)
  }).catch((error) => {
    if (error.response) {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
      }
  })
  /*try {
    const data = await axios.get("url");
  } catch {
    // 오류 발생시 실행
  }
  console.log(data)*/
}

  return (
      
    <Container>
      <Header />
      <Center>
      <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                {/* <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p> */}
                <button onClick={getData}>Click me</button>

            {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
        </header>
        </div>
        <Contents />
      </Center>
    </Container>
  );
}

export default App;

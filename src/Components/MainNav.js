import React from 'react';
import styled from 'styled-components';

const MainAside = () => {
  return (
    <Side>
      <img src="./Images/프사용사진.png" alt="mainImage"/>

      <ContactBox>
          <h1>이상철</h1>
          <h3>FrontEnd Developer</h3>

          <div>
          <h2>GitHub</h2>
          <h2>Blog</h2>
          <h2>E-Mail</h2>
          <h2>Phone</h2>
          </div>
      </ContactBox>
    </Side>
  )
}


const Side = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  background-color :#C8C5C5;
  opacity: 0.1;
  img {
    width:200px;
    height:200px;
    border-radius:100px;
    margin-top: 50px;
    
  }
`;

const ContactBox = styled.div`
  font-size:30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h3 {
    margin: 10px 0px;
  }
  
  div {
    margin-top:20px;

    h2 {
      margin: 10px 0px;
    }
  }
`;


export default MainAside
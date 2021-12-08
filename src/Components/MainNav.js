import React from 'react';
import styled from 'styled-components';
import { GrGithub,GrMailOption } from 'react-icons/gr';
import { FaMobileAlt ,FaBloggerB} from "react-icons/fa"

const MainAside = () => {
  return (
    <Side>
      <img src="./Images/프사용사진.png" alt="mainImage"/>

      <ContactBox>
          <GrGithub className="contact"/>
          <FaBloggerB className="contact"/>
          <GrMailOption className="contact"/>
          <FaMobileAlt className="contact"/>
      </ContactBox>
    </Side>
  )
}


const Side = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  
  img {
    width:250px;
    height:250px;
    border-radius:125px;
    margin-bottom: 15px;
  }
`;

const ContactBox = styled.div`
  font-size:30px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
   .contact {
     margin: 0 10px;
     cursor: pointer;
   }
 `;



export default MainAside
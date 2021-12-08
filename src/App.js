import React from 'react';
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import MainInfo from './Components/MainInfo';
import MainAside from './Components/MainNav';
import Skill from './Components/Skill';
import { FaReact,FaJs,FaCss3Alt,FaHtml5 } from 'react-icons/fa'


const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <MainSection>
      
          <article className="description">
            <MainAside />  
            <MainInfo/>
          </article>

          <article className="information">
            <h1 className="title">Skills</h1>

            <SkillBox>
            <Skill icon={ <FaReact />} name="React" level="65%" color="blue"/>
            <Skill icon={ <FaJs/> } name="Java Script" level="50%"/>
            <Skill icon={ <FaCss3Alt />} name="CSS3" level="65%"/>
            <Skill icon={ <FaHtml5/> }name="HTML5" level="65%"/> 
            </SkillBox>

            <h1 className="title">InternShip</h1>
            <TextBox>
            <h2>Anser Technologies </h2><span>(2021.11.1 ~ 11.26)</span>
            <p>기업정보조회,산업정보열람, 재무제표분석, 기업가치평가와 이벤트 분석까지 기존에 없던 새로운 기업 분석 툴인 </p>
            <span className="mynter">Mynter</span><span>의 WorkSpace 부분을 담당하여 프로젝트를 진행했습니다.</span>
            </TextBox>

            <h1 className="title">Project Experience</h1>
            <h2 className="value">Team Project</h2>

          </article>  

         

        </MainSection>
      </Container>
    </>

  );
}






const Container = styled.div`
  width:1000px;
  margin: 0 auto;
  padding: 150px;

`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  .description {
    display: flex;
    align-items:center;
    margin:0 auto;
    border-bottom : 1px solid grey;
    }
   
  .information {
    .title {
      font-size:30px;
      font-weight:bold;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
`;



const SkillBox = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 10px;
  cursor: pointer;
  `;


const TextBox = styled.div`
  margin-bottom: 15px;

  font-size:18px;
  h2 {
    font-size:22px;
    font-weight:bold;
    
  }
  p {
    margin-top:7px;

  }
  .mynter{
    font-weight:bold;
    cursor: pointer;
  }
`;


const GlobalStyle = createGlobalStyle`
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,
small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,
aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,
nav,output,ruby,section,summary,time,mark,audio,video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,
nav,section {
  display: block;
}
body {
  line-height: 1;
  font-family: 'Roboto', sans-serif;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input:focus {
  outline: none;
}
a {
  color: inherit;
  text-decoration: none;
}
`;

export default App;

import React from 'react';
import { createGlobalStyle} from 'styled-components'
import styled from 'styled-components';
import MainNav from './Components/MainNav';
import MainImage from './Components/MainImage';
import MainInfo from './Components/MainInfo';

const App = () => {
  return (
    <>
      <GlobalStyle/>

      <MainSection>

         <MainNav/>

         <Container>
          <MainImage />
          <MainInfo />
         </Container>
         
      </MainSection>
    </>

  );
}






const Container = styled.div`
  margin-left: 350px;

`;



const MainSection = styled.section`
padding-right: 50px;
  
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

import React from 'react';
import { createGlobalStyle} from 'styled-components'
import styled from 'styled-components';
import MainInfo from './Components/MainInfo';
import MainAside from './Components/MainNav';

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

          <article className="">

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
  align-items: center;
  .description {
    display: flex;
    align-items:center;
    margin:0 auto;
    border-bottom : 1px solid grey;
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

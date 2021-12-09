import React from 'react';
import styled from 'styled-components';

const Skill = ({ icon,name,level,color }) => {
  return (

    <Box color={color}>
      <div className="icon">{icon}</div>
      <div className="container">
      <h1>{name}</h1>
      <h2>{level}</h2>
      </div>
    </Box>
  )
}

const Box = styled.nav`
  width: 200px;
  height:55px;
  display: flex;
  padding: 10px;
  border:1px solid rgba(0,0,0,0.3);
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  .icon {
    font-size:55px;
    margin-right : 10px;
    color: color
  }
  .container {
    padding-top:4px;

      h1 {
        font-size:25px;
      }

      h2 {
        font-size:20px;
      }
  }
`;

export default Skill;
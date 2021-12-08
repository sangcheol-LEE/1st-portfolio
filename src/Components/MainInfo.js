import React from 'react'
import styled from 'styled-components'

const MainInfo = () => {
  return (
    <InfoBox>
    <h1>안녕하십니까!</h1>
    <p>신입 프런트엔드 개발자 <span>이상철</span>입니다!</p>
    <p><span>창의적 인터페이스</span>와 <span>사용자 친화적인</span> 움직임을 통해 </p>
    <p>사용자에게 잊지못할 기억과</p>
    <p><span>경제적인 가치</span>를 끌어낼 수 있다고 믿습니다.</p>
    </InfoBox>

  )
}

const InfoBox = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 20px;

    h1 {
      font-size: 40px;
    }

   span {
     font-size:25px;
   }

   p {
     line-height: 1.5;
   }
`;



export default MainInfo
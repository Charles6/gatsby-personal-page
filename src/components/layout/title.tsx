import React from "react";
import styled from "@emotion/styled";

const TitleBar = styled.div`
  color:#78bfaf;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(6, 1rem);
`
const FirstName = styled.h1`
  font-family: "gotham-ultra";
  // color:white;
  color: #78bfaf;
  text-align: right;
  font-size: 40px;
  grid-column: 1;
  grid-row: 4 / span 3;
  align-self: center;
  margin-right: 0.5rem;
`
const LastName = styled.h1`
font-family: "gotham-ultra";
  text-align: right;
  font-size: 44px;
  grid-column: 1;
  grid-row: 1 / span 3;
  align-self: center;
  margin-right: 0.5rem;
  // background-color: white;
  // color: #78bfaf;
  color:white;
`
const CoderTitle = styled.h2`
  color: white;
  grid-column: 2;
  grid-row: 1 / span 2;
  margin:0;
  margin-top:0.5rem;
`

const TeachTitle = styled.h2`
  color:#acded5;
  grid-column: 2;
  grid-row: 3 / span 2;
  margin:0;
  margin-top:0.5rem;
`
const SocTitle = styled.h2`
  color: #51988b;
  grid-column: 2;
  grid-row: 5 / span 2;
  margin:0;
  margin-top:0.5rem;
`

const Title = () => {
  
  return (
    <TitleBar>
      <FirstName>
        CHARLES
      </FirstName>
      <LastName>
        NGUYEN
      </LastName>
      <CoderTitle>
        coder
      </CoderTitle>
      <TeachTitle>
        teacher
      </TeachTitle>
      <SocTitle>
        sociologist
      </SocTitle>
    </TitleBar>
  )
}

export default Title
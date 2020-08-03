import React from "react";
import styled from "@emotion/styled";

const HeaderBar = styled.header`
  color:#78bfaf;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(6, 1rem);
`
const FirstName = styled.h1`
  color:#78bfaf;
  text-align: right;
  font-size: 62px;
  grid-column: 1;
  grid-row: 1 / span 3;
  align-self: center;
`
const LastName = styled.h1`
  text-align: right;
  font-size: 60px;
  grid-column: 1;
  grid-row: 4 / span 3;
  align-self: center;
`
const CoderTitle = styled.h2`
  color: white;
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: start;
`

const TeachTitle = styled.h2`
  color:#acded5;
  grid-column: 2;
  grid-row: 3 / span 2;
  align-self: center;
`
const SocTitle = styled.h2`
  color: #51988b;
  grid-column: 2;
  grid-row: 5 / span 2;
  align-self: end;
`

const Header = () => {
  
  return (
  <HeaderBar>
    <FirstName>
      Charles
    </FirstName>
    <LastName>
      Nguyen
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
  </HeaderBar>
)}

export default Header
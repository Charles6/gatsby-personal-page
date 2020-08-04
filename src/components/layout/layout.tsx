import React, {ReactNode, useState} from "react";
import styled from "@emotion/styled";
import Title from "./title";
import NavComponent from "./nav";
import Main from "./main";
// import Footer from "./footer";
import "./layout.css";

export interface MainContent {
  children: ReactNode;
}

const PageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const StyledTitle = styled(Title)`
  grid-column: 1;
`
const StyledNav = styled(NavComponent)`
  grid-column: 2;
`
const StyledMain = styled(Main)`
  height: 3000px;
  background-color:#111111;
`

const Layout = ({ children }: MainContent) => {
  const [page, setPage] = useState("home");
console.log(page)
  return (
    <PageWrapper>
      <StyledHeader>
        <StyledTitle />
        <StyledNav
          page={page}
          setPage={setPage}
        />
      </StyledHeader>
      <StyledMain
        page={page}
      />
      {/* <Footer/> */}
    </PageWrapper>
  )
}

export default Layout
import React, {ReactNode} from "react";
import styled from "@emotion/styled";
import Header from "./header";
import NavComponent from "./nav";
// import Footer from "./footer";
import "./layout.css";

export interface MainContent {
  children: ReactNode;
}

const PageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const StyledHeader = styled(Header)`
  grid-column: 1;
`
const StyledNav = styled(NavComponent)`
  grid-column: 2;
`
const Main = styled.main`
  height: 3000px;
  background-color:#111111;
`

const Layout = ({ children }: MainContent) => {

  return (
    <PageWrapper>
      <Top>
        <StyledHeader />
        <StyledNav />
      </Top>
      <Main>{children}</Main>
      {/* <Footer/> */}
    </PageWrapper>
  )
}

export default Layout
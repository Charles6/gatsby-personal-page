import React, {ReactNode} from "react";
import Header from "./header";
// import Nav from "./nav"
// import Footer from "./footer";
// import "./layout.css";

export interface MainContent {
  children: ReactNode;
}

const Layout = ({ children }: MainContent) => {

  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
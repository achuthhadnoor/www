import Footer from "../components/Footer"
import Header from "../components/Header"

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
  a{
      text-decoration:none;
      color:inherit;
  }
`;

const Layout = ({children}: { children: any })=>{
    return(
        <>
        <GlobalStyle />
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout;
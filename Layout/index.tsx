import Footer from "../components/Footer"
import Header from "../components/Header"

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
  }

  * {
    box-sizing: inherit;
  }
  a{
      text-decoration:none;
      color:inherit;
  }
  
  ::-webkit-scrollbar {
            width: 14px;
            height: 14px
        }
        ::-webkit-scrollbar-track {
            background-color: transparent
        }
        ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
            border: 4px solid transparent;
            background-clip: padding-box;
            border-radius: 8px
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.accent}
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
        }
`;

const theme = {
    accent: 'black',
}

const Layout = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </ThemeProvider>
    )
}

const Content = styled.main`
  max-width:1024px;
  margin:0 auto;
  text-align:center;
`;

export default Layout;
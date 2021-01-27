import Footer from "../components/Footer"
import Header from "../components/Header"

import styled from "styled-components";
import { ThemedWrapper } from "../Theme";

const Layout = ({ children }: { children: any }) => {
    return (<ThemedWrapper>
        <Header />
        <Content>
            {children}
        </Content> 
    </ThemedWrapper>
    )
}

const Content = styled.main`
  max-width:1024px;
  margin:0 auto;
  text-align:center;
`;

export default Layout;
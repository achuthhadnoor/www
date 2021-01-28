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

const Content = styled.div`
  max-width:1024px;
  margin:0 auto; 
  padding:0px 20px;
`;

export default Layout;
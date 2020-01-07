import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'
import Human from './../components/ilustrations/human_thought'
class Home extends React.Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Intro>
                        <h3>On a mission to create digital
                            experiences more fluid and human </h3>
                        <div>
                            we create Apps that help you foucs on your productivity by removing the complex UI and UX to manage your thoughts and ideas.
                            </div>
                    </Intro>
                    <Illustration>
                       <Human/>
                    </Illustration>
                </Content>
                <Urls>
                    ewee
                </Urls>
            </Wrapper>
        )
    }
}

export default Home


const Wrapper = styled.div`
    display:flex;
    
`;
const Content = styled.div`
    display:flex;
    flex:1;
    @media (max-width: 600px) {
        flex-direction:column-reverse;
    }
`;
const Intro = styled.div`
    display:flex;
    flex-direction:column;
    max-width:600px;
    padding:10px 20px;
    justify-content:center;
    div{
        font-size:.7em;
    }
`;
const Illustration = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    justify-content:center;
`;
const Urls = styled.div`
    display:flex;
    flex-direction:column;
`
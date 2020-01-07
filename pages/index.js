import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'
import Human from './../components/ilustrations/human_thought'
import Icon from 'react-icons-kit'
import { instagram, facebook, twitter } from 'react-icons-kit/feather'
class Home extends React.Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Intro>
                        <h3>On a mission to create digital
                            experiences more fluid and human </h3>
                        <div>
                            We create Apps that help you foucs on your productivity by removing the complex UI and UX to manage your thoughts and ideas.
                            </div>
                    </Intro>
                    <Illustration>
                        <Human />
                    </Illustration>
                </Content>
                <Urls>
                    <Icon icon={instagram} style={{ padding: 10 }} />
                    <Icon icon={facebook} style={{ padding: 10 }} />
                    <Icon icon={twitter} style={{ padding: 10 }} /> 
                </Urls>

            </Wrapper>
        )
    }
}

export default Home


const Wrapper = styled.div`
    display:flex;
    max-width:1200px;
    margin:auto;
    max-height:700px;
    min-height:500px;
`;
const Content = styled.div`
    display:flex;
    flex:1;
    @media (max-width: 600px) {
        flex-direction:column-reverse;
        text-align:center;
    }
`;
const Intro = styled.div`
    display:flex;
    flex-direction:column;
    max-width:500px;
    padding:10px 20px;
    justify-content:center;
    h3{
        font-size:.9em;
    }
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
    @media (min -width: 600px) {
        
    justify-content:center;
    align-items:center;
    }
`
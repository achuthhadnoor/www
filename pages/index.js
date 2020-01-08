import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'
import Human from './../components/ilustrations/human_thought'
import MainContent from './../components/mainContent'
class Home extends React.Component {
    render() {
        // const intro = ()=>;
        return (
            <Wrapper>
                <MainContent 
                    Intro={<>
                            <h3>On a mission to create digital experiences more fluid and human </h3>
                            <br></br>
                            <div>
                                We create Apps that help you foucs on your productivity 
                                by removing the complex UI and UX to manage your thoughts and ideas.
                            </div>
                            </>} 
                    Illustration={<Human />} />
                    <ScrollerWrapper>
                        <a className="text">Scroll</a>
                        <span/>
                    </ScrollerWrapper>

            </Wrapper>
        )
    }
}
export default Home

const ScrollerWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column; 
    .text{
        font-size:.5em;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        &::before{
            content:'';
            display:block;
            height:50px;
            width:40px;
            border:1px solid ${props=>props.theme.color};
            border-radius:20px;
        }
        &::after{
            content:'';
            display:block;
            background:${props=>props.theme.color};
            height:15px;
            width:5px;
            left:-22px;
            top:10px;
            border-radius:25px;
            position:relative; 
        } 
    }
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1200px;
    margin:auto;
    max-height:700px;
    min-height:500px;
    text-align:center;
    justify-content:center;
`;
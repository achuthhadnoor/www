import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'
import Human from './../components/ilustrations/ui-mobile'
import MainContent from './../components/mainContent'
class Home extends React.Component {
    render() {
        // const intro = ()=>;
        return (
            <Wrapper>
                <MainContent 
                    Intro={<>
                            <h3>User Interface </h3>
                            <br></br>
                            <div>
                               User interface (UI) design is the process of making interfaces in software or 
                               computerized devices with a focus on looks or style. Designers aim to create designs
                                users will find easy to use and pleasurable. UI design typically refers to graphical
                                 user interfaces but also includes others, such as voice-controlled ones.
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
        padding:10px 0px;
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
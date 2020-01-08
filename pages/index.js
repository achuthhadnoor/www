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
                            <div>
                                We create Apps that help you foucs on your productivity 
                                by removing the complex UI and UX to manage your thoughts and ideas.
                            </div>
                            </>} 
                    Illustration={<Human />} />
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
import React, { useState } from 'react' 
import Icon from 'react-icons-kit'
import NavLink from 'next/link'
import { moon, sun } from 'react-icons-kit/feather'
import { theme } from '../layouts/page'
import styled from 'styled-components'


const Nav = (props) => { 
    return ( 
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: '20px 0px' }}>
            <h3 style={{ fontFamily: 'monospace', flex: 1 }}>  -///-   </h3>
            <NavWrapper>
                <NavLink href="/"><a style={{ padding: '5px 10px' }}>Home</a></NavLink>
                {/* <NavLink href="/projects"><a style={{ padding: '5px 10px' }}>Projects</a></NavLink> */}
                <NavLink href="/blog"><a style={{ padding: '5px 10px' }}>Blog</a></NavLink>
                <NavLink href="/now"><a style={{ padding: '5px 10px' }}>Now</a></NavLink>
               <span style={{ padding: '5px 10px' }} onClick={() => { props.changeTheme() }}><Icon icon={props.theme === theme.light ? moon : sun} /></span>
            </NavWrapper>
           
        </nav>
             
    )
}

export default Nav ;

const NavWrapper = styled.div`
    display:flex; 
    list-style:none;   
    a:hover{
        background:${props => props.theme.tint}; 
        border-radius:5px;
    }
`
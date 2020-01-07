import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    return (
        <NavWrapper> 
                <Logo /> 
            <ul>
                <li>UI</li>
                <li>UX</li>
                <li>DX</li>
            </ul>
            <MenuIcon onClick={() => { setMenu(!menu) }} />
            {menu && <MenuSheet>
                <span onClick={() => { setMenu(!menu) }}>close</span>
            </MenuSheet>}
        </NavWrapper>
    )
}

export default Nav
const Logo = () => <LogoWrapper>UIUXDX</LogoWrapper>
const LogoWrapper = styled.h3`
    flex:1;
    font-size:24px;
    font-family: monospace;
    font-weight:900; 
     @media (max-width: 600px) {
        margin:0;
      }
`

const NavWrapper = styled.nav`
    display:flex;
    flex:1; 
    margin:auto;
    padding:10px;
    ul{
        display:flex;
        list-style:none;
        flex:0.3;
        font-size:.7em;
        @media (max-width: 600px) {
          display:none;
      }
      li{
          padding:10px;
          flex:1;
      }
    }
`;

const MenuIcon = styled.span`
@media (min-width: 600px) {
    display:none;
}
&::before{
    content:'';
    margin:5px; 
    display:block;
    height:3px;
    background:#000;
    width:20px;
    border-radius:5px;
}
&::after{
    content:'';
    margin:5px; 
    display:block;
    height:3px;
    background:#000;
    width:10px;
    border-radius:5px;
}
`

const MenuSheet = styled.div` 
position:fixed;
z-index:9999;
background:#fff;
color:#000;
height:100vh;
width:100vh;
transition:all 1s ease-in-out;
   @media (min-width: 600px) {
          display:none;
      }
`
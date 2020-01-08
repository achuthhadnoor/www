import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { x, moon } from 'react-icons-kit/feather'
const Nav = (props) => {
    const [menu, setMenu] = useState(false)
    return (
        <NavWrapper>
            <Logo />
            <ul className="desk-nav">
                <li>
                    <Link href="/about">
                        <a>UI</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>UX</a>
                    </Link></li>
                <li>
                    <Link href="/about">
                        <a>DX</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>PROJECTS</a>
                    </Link>
                </li>
                <li onClick={() => { props.OnThemeChange() }}>
                    <span><Icon icon={moon} /></span>
                </li>
            </ul>
            <MenuIcon onClick={() => { setMenu(!menu) }} />
            {menu && <MenuSheet>
                <span onClick={() => { setMenu(!menu) }}><Icon icon={x} style={{ cursor: 'pointer' }} /></span>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>UI</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>UX</a>
                        </Link></li>
                    <li>
                        <Link href="/about">
                            <a>DX</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>PROJECTS</a>
                        </Link>
                    </li>
                    <li onClick={() => { props.OnThemeChange() }}>
                        <i><Icon icon={moon} /></i>
                    </li>
                </ul>
            </MenuSheet>}
        </NavWrapper>
    )
}

export default Nav
const Logo = () => <LogoWrapper>
                        <Link href="/">
                            <a>
                                UIUXDX
                        </a>
                        </Link>
                    </LogoWrapper>;
const LogoWrapper = styled.h3`
    flex:1;
    font-size:24px;
    font-family: monospace;
    font-weight:900; 
    padding:10px;
    @media (max-width: 600px) {
        margin:0;
    }
    `

const NavWrapper = styled.nav`
    display:flex;
    flex:1; 
    margin:auto;
    padding:2% 5%;
    .desk-nav{
        display:flex;
        list-style:none;
        flex:0.5;
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
cursor:pointer;
@media (min-width: 600px) {
    display:none;
}
&::before{
    content:'';
    margin:5px; 
    display:block;
    height:3px;
    background:${props => props.theme.color};
    width:20px;
    border-radius:5px;
}
&::after{
    content:'';
    margin:5px; 
    display:block;
    height:3px;
    background:${props => props.theme.color};
    width:10px;
    border-radius:5px;
}
`

const MenuSheet = styled.div` 
    display:flex; 
    align-items:center;
    text-align:center;
    justify-content:center;
    position:fixed;
    z-index:9999;
    background:${props => props.theme.primary};
    top:0;
    left:0;
    color:${props => props.theme.color};
    height:100%;
    width:100%;
    transition:all 1s ease-in-out;
    @media (min-width: 600px) {
            display:none;
        }
    span{
       position:absolute;
       top:10%;
       right:10%; 
    }
    ul{
        list-style:none;
        flex:1;
        margin:0;
        padding:0px 20px;
        li{
            padding:10px 0px; 
            flex:1;
        }
    }
`
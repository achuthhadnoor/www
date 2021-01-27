import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from 'react-icons-kit';
import { barChart } from 'react-icons-kit/feather/barChart'
import { x } from 'react-icons-kit/feather/x'
import { LINKS } from '../../constants'
import { ThemedButton } from '../../Theme';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const renderLinks = () => (
      <Nav>
        {
          LINKS.map((link, i) => (
            <Link href={link.path} key={i}>
              <NavLink
                href={link.path}
                target={link.target}
                isActive={router.pathname === link.path ? true : false}
                key={i}
                rel="noopener"
              >
                {link.label}
              </NavLink>
            </Link>
          ))
        }
      <NavLink>
        <ThemedButton />
      </NavLink>
      </Nav>
  )
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Wrapper>
          <Link href="/">
            <Logo>-///-</Logo>
          </Link>
          <span style={{ flex: 1 }} />
          <Menu onClick={() => setIsOpen(!isOpen)}> <Icon icon={barChart} /></Menu>
        </Wrapper>
        <NavigationWrapper>
          {
            renderLinks()
          }
        </NavigationWrapper>
      </NavWrapper>
      {isOpen && <MobileNav>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: '20px' }}>
            <Link href="/">
              <Logo>-///-</Logo>
            </Link></div>
          <span style={{ flex: 1 }} />
          <Icon icon={x} onClick={() => { setIsOpen(!isOpen) }} style={{ padding: 10, marginTop: 10 }} />
        </div>
        {renderLinks()}

      </MobileNav>}

    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background:${({ theme }) => theme.header.bg};
  backdrop-filter: blur(3px);
  z-index: 999;
  font-size:.9em; 
`;

const NavWrapper = styled.div`
  align-items: center;
  max-width: 1024px;
  margin: auto; 
  font-size: 0.8em;
  padding:10px 0px; 
  backdrop-filter: blur(3px);
  display:flex; 

`;

const Wrapper = styled.div`
  flex:1;
  display:flex;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  text-align: right;
  align-items:center; 
  @media (max-width: 800px) {
    & {  
        flex-direction:column;
        text-align:left;
        align-items:flex-end;
        /* border-bottom:1px solid #aaa;
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,.4); */
        padding-right:10px;
        padding-bottom:10px;
    }
    a{
      flex:1;
      margin-top:10px;
    }
  }
`;

const NavLink = styled.a`
  padding: 10px;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 5px;
  cursor:pointer;
  background: ${({isActive,theme}) => (isActive ? theme.header.activeBg : '')};
  color: ${({isActive,theme}) => (isActive ? theme.header.active : '')};
  :hover {
    background: ${({theme})=> theme.header.activeBg};
    color: ${({theme})=> theme.header.active} ; 
  }
`;

const Logo = styled.a`
  padding: 10px;
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
`;

const Menu = styled.span`
  transition: all 0.5s ease-in-out; 
  transform:rotate(-90deg); 
  padding:10px;
  @media (min-width: 800px) {
  display:none;
  }
`;
const NavigationWrapper = styled.div`
padding-top:10px;
  @media (max-width: 800px) {
    display:none;
  }
`;
const MobileNav = styled.div`
  position:absolute;
  display:flex;
  width:100%; 
  top:0;
  flex-direction:column;
  text-align:right;
  font-size: 1em;
  background:${({ theme }) => theme.bg2};
  @media (min-width: 800px) {
    display:none;
  }
`;

export default Header;

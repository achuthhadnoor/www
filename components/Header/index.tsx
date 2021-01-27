import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from 'react-icons-kit';
import { send } from 'react-icons-kit/feather/send';
import { barChart } from 'react-icons-kit/feather/barChart'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/">
          <Logo>-///-</Logo>
        </Link>
        <span style={{ flex: 1 }} />
        <Icon icon={barChart}/>
        <Nav>
          <Link href="/">
            <NavLink isActive={router.pathname === '/' ? true : false}>
              Home
          </NavLink>
          </Link>
          <NavLink
            href="https://blog.achuth.dev"
            target="_blank"
            isActive={router.pathname === '/blog' ? true : false}
          >Blog</NavLink>
          <Link href="/apps">
            <NavLink isActive={router.pathname === '/apps' ? true : false}  >
              apps
          </NavLink>
          </Link>
          <Link href="/shorts">
            <NavLink isActive={router.pathname === '/shorts' ? true : false}  >
              Shorts
          </NavLink>
          </Link>
          <Link href="/bookmarks">
            <NavLink isActive={router.pathname === '/bookmarks' ? true : false}  >
              bookmarks
          </NavLink>
          </Link>
          <Link href="/resources">
            <NavLink isActive={router.pathname === '/resources' ? true : false}  >
              resources
          </NavLink>
          </Link>
        </Nav>
        <Send style={{ paddingLeft: 10 }}>
          <a>
            <Icon icon={send} />
          </a>
        </Send>
      </NavWrapper>
       </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 999;
  font-size:.8em;
`; 

const NavWrapper = styled.div`
  align-items: center;
  max-width: 1024px;
  margin: auto; 
  font-size: 0.8em;
  padding:10px 0px; 
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  @media (min-width: 800px) {
    & { 
      display:flex;
      font-size: 1em;
    } 
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  text-align: right;
  align-items:center; 
  @media (max-width: 800px) {
    & { 
        align-items:baseline; 
        flex-direction:column;
        position:absolute;
        background:#fff;
        backdrop-filter:blur(10px);
        width:100%;
      a{
        display:block;
        flex:1;
        text-align:center;
      }
    }
  }
`;

const NavLink = styled.a`
  padding: 10px;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 5px;
  cursor:pointer;
  background: ${(props) => (props.isActive ? 'rgb(236 244 255 / 70%)' : '')};
  color: ${(props) => (props.isActive ? '#0062ff' : '')};
  :hover {
    background: rgb(236 244 255 / 70%);
    color: #0062ff;
  }
`;

const Logo = styled.a`
  padding: 10px;
  font-weight: 700;
  letter-spacing: 5px;
  cursor: pointer;
`;

const Send = styled.span`
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 0px);
  :hover {
    transform: translate3d(10px, -5px, 0px);
  }
`;

export default Header;

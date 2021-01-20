import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from 'react-icons-kit';
import { send } from 'react-icons-kit/feather/send';
const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/">
          <Logo>-///-</Logo>
        </Link>
        <span style={{ flex: 1 }} />
        <Nav>
          <NavLink href="/" isActive={router.pathname === '/' ? true : false}>
            Home
          </NavLink>
          <NavLink
            href="/about"
            isActive={router.pathname === '/about' ? true : false}
          >
            About
          </NavLink>
          <NavLink
            href="/shorts"
            isActive={router.pathname === '/shorts' ? true : false}
          >
            Shorts
          </NavLink>
          <NavLink
            href="/bookmarks"
            isActive={router.pathname === '/bookmarks' ? true : false}
          >
            bookmarks
          </NavLink>
          <NavLink
            href="/awesome"
            isActive={router.pathname === '/awesome' ? true : false}
          >
            Awesome
          </NavLink>
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
`;
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1024px;
  margin: auto;
  padding: 20px 0px;
  flex-direction: column;
  font-size: 0.8em;
  @media (min-width: 800px) {
    & {
      flex-direction: row;
      font-size: 1em;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  text-align: right;
  @media (max-width: 800px) {
    & {
      padding-top: 20px;
    }
  }
`;

const NavLink = styled.a`
  padding: 10px;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 5px;
  background: ${(props) => (props.isActive ? 'rgb(236 244 255 / 70%)' : '')};
  color: ${(props) => (props.isActive ? '#0062ff' : '')};
  :hover {
    background: rgb(236 244 255 / 70%);
    color: #0062ff;
  }
`;

const Logo = styled.a`
  padding: 10px;
  font-weight: 600;
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

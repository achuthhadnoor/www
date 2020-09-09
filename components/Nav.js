import styled from 'styled-components';
import { ThemedButton } from '../Theme';
import NavLink from 'next/link';
import Link from './Link';
import Icon from 'react-icons-kit';
import { dribbble } from 'react-icons-kit/fa';
import { instagram } from 'react-icons-kit/fa';
import { linkedin } from 'react-icons-kit/fa';
import { twitter } from 'react-icons-kit/fa';
export default () => {
  return (
    <Header>
      <nav
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          padding: '20px 0px',
          textTransform: 'uppercase',
          opacity: 0,
          animation: ' bcCCNc 0.6s 0.3s ease-in-out forwards'
        }}
      >
        <h3 style={{ fontFamily: 'monospace', flex: 1, fontWeight: 700 }}>
          <NavLink href="/">
            <a>-///-</a>
          </NavLink>
        </h3>

        <NavWrapper>
          <Link to="/" label="home" />
          <Link to="/projects" label="Projects" />
          <Link to="/blog" label="articles" />
          {/* <NavLink href="/now">
            <a style={{ padding: '10px 15px' }}>Now</a>
          </NavLink> */}
        </NavWrapper>
        {/* <ThemedButton /> */}
      </nav>
    </Header>
  );
};

const NavWrapper = styled.div`
  display: flex;
  list-style: none;
  a:hover {
    background: ${(props) => props.theme.tint};
    border-radius: 5px;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 5px;
  background: ${(props) => props.theme.tint};
  color: ${(props) => props.theme.color};
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
`;

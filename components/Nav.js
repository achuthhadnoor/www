import styled from 'styled-components';
import { ThemedButton } from '../Theme';
import NavLink from 'next/link';
export default () => {
  return (
    <Header>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          padding: '20px 0px',
          maxWidth: '800px',
          margin: 'auto'
        }}
      >
        <h3 style={{ fontFamily: 'monospace', flex: 1, fontWeight: 700 }}>
          {' '}
          <NavLink href="/">
            <a>-///-</a>
          </NavLink>
        </h3>

        <NavWrapper>
          <NavLink href="/">
            <a style={{ padding: '10px 15px' }}>Home</a>
          </NavLink>
          {/* <NavLink href="/projects"><a style={{ padding: '5px 10px' }}>Projects</a></NavLink> */}
          <NavLink href="/blog">
            <a style={{ padding: '10px 15px' }}>Blog</a>
          </NavLink>
          <NavLink href="/now">
            <a style={{ padding: '10px 15px' }}>Now</a>
          </NavLink>
        </NavWrapper>
        <ThemedButton />
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
`;

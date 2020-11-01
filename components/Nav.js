import styled from 'styled-components';
import NavLink from 'next/link';
import Link from './Link';
export default () => {
  return (
    <Header>
      <h3 style={{ fontFamily: 'monospace', flex: 1, fontWeight: 700 }}>
        <NavLink href="/">
          <a>-///-</a>
        </NavLink>
      </h3>
      <span style={{ flex: 1 }} />
      <NavWrapper>
        <Link to="/" label="home" />
        <Link to="/blog" label="articles" />
        <Link to="/#projects" label="Projects" />
        <Link to="/#contact" label="Contact" />
        {/* <NavLink href="/now">
                            <a style={{ padding: '10px 15px' }}>Now</a>
                        </NavLink> */}
      </NavWrapper>
      {/* <ThemedButton /> */}
    </Header>
  );
};

const NavWrapper = styled.div`
  display: flex;
  list-style: none;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  flex: 1;
  max-width: 1200px;
  display: flex;
  background: ${(props) => props.theme.tint};
  color: ${(props) => props.theme.color};
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px 0px;
  text-transform: uppercase;
  animation: bcCCNc 0.6s 0.3s ease-in-out forwards;
  @media (max-width: 960px) {
    & {
      flex-direction: column;
    }
  }
`;

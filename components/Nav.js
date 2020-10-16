import styled from 'styled-components';
import NavLink from 'next/link';
import Link from './Link';
export default () => {
  return (
    <DeskTopNav>
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
    </DeskTopNav>
  );
};

const DeskTopNav = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px 0px;
  text-transform: uppercase;
  opacity: 0;
  animation: bcCCNc 0.6s 0.3s ease-in-out forwards;
`;

const NavWrapper = styled.div`
  display: flex;
  list-style: none;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 5px;
  flex: 1;
  max-width: 1200px;
  display: flex;
  background: ${(props) => props.theme.tint};
  color: ${(props) => props.theme.color};
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    & {
      flex-direction: column;
    }
  }
`;

import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Social from '../social';
const Footer = () => {
  const router = useRouter(); 
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/">
          <Logo>-///-</Logo>
        </Link>
        <span style={{ flex: 1 }} />
        <Social style={{ textAlign: 'right' }} />
      </NavWrapper>
      <Seperator/>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.footer`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const Seperator = styled.div`
height:3px;
background-image: linear-gradient(to right,var(--tw-gradient-stops));
    --tw-gradient-from: #f90;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to,rgba(255,153,0,0));
    --tw-gradient-to: #ff007a;
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

const Logo = styled.a`
  padding: 10px;
  font-weight: 600;
  letter-spacing: 5px;
  cursor: pointer;
`;
export default Footer;

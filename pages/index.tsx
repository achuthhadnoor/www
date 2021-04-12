import Social from '../components/social';
import styled from 'styled-components' 

const Home = () => (
  <>
    <Main>
      <Name>Achuth Hadnoor</Name>
      <Role>Developer {`&`} UI/UX designer</Role>
      <Details>
        I <Nav>design</Nav> and develop digital products. Through these experiences, I've had the opportunity to create memorable products that are
        not only enjoyable to use by design but are also written in code that's maintainable and easy to understand.
     </Details>
      <Social style={{ paddingTop: '30px',color:'#000' }} /> 
    </Main> 
  </>
);

const Nav = styled.a`
  /* padding:3px 10px;
  border-radius:5px;
  background:${props=> props.theme.bg2};
  &:hover{
    background:${props=>props.theme.accent};
    color:${props=>props.theme.color3};
  } */
`;

const Main = styled.main`
  max-width:1024px;
  margin:0 auto; 
`;
const Section = styled.div`

`;

const Name = styled.h1`
    font-weight: 600;
    font-size: 2.5em;
    margin:0px;
    padding-top: 60px;
    padding-left:10px;
`;

const Role = styled.h2`
    max-width: 400px; 
    font-size: 1.3em;
    font-weight:400;
    padding:10px;
    padding-left:10px;
`;

const Details = styled.div`
    padding:10px;
    font-size: 1em;
    line-height: 2rem; 
    max-width:500px;
    width:100%; 
`;

export default Home;

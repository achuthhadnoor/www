import Social from '../components/social'; 
import styled from 'styled-components' 
import Subscribe from '../components/Subscribe';
const Home = () => ( 
    <Main>
      <Name>Achuth Hadnoor</Name>
      <Role>Developer & UI/UX designer</Role>
      <Details>
        I design and develop digital products. Through these experiences, I've had the opportunity to create memorable products that are
        not only enjoyable to use by design but are also written in code that's maintainable and easy to understand.
     </Details>
      <Social style={{paddingTop:'30px'}}/>
      <Subscribe/>
    </Main> 
);


const Main = styled.main`
  max-width:1024px;
  margin:0 auto; 
`; 
const Section = styled.div`

`;

const Name = styled.h1`
    font-weight: 600;
    font-size: 42px;
    margin:0px;
    padding-top: 60px;
    padding-left:10px;
`;

const Role = styled.h2`
    max-width: 400px; 
    font-size: 24px;
    font-weight:400;
    padding-bottom:20px;
    padding-left:10px;
`;

const Details = styled.div`
    padding:10px;
    font-size: 1rem;
    line-height: 2rem; 
    max-width:500px;
    width:100%; 
`;

export default Home;

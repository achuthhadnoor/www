import Social from '../components/social';
import Layout from '../Layout';
import styled from 'styled-components'
import { EDEADLK } from 'constants';
import Subscribe from '../components/Subscribe';
const Home = () => ( 
    <Section>
      <Name>Achuth Hadnoor</Name>
      <Role>Developer & UI/UX designer</Role>
      <Details>
        I design and develop digital products. Through these experiences, I've had the opportunity to create memorable products that are
        not only enjoyable to use by design but are also written in code that's maintainable and easy to understand.
     </Details>
      <Social style={{paddingTop:'30px'}}/>
      <Subscribe/>
    </Section> 
);

const Section = styled.div`

`;

const Name = styled.div`
    font-weight: 600;
    font-size: 42px;
    padding-top: 60px;
`;

const Role = styled.div`
    max-width: 400px;
    margin: 0 auto;
    font-size: 24px;
`;

const Details = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding-top:20px;
`;

export default Home;

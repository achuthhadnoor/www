
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { instagram, facebook, twitter } from 'react-icons-kit/feather'
export default (props) => <>

    <Content>
        <Intro>
            {props.Intro}
        </Intro>
        <Illustration>
            {props.Illustration}
        </Illustration>
    </Content>
    <Urls>
        <Icon icon={instagram} style={{ padding: 10 }} />
        <Icon icon={facebook} style={{ padding: 10 }} />
        <Icon icon={twitter} style={{ padding: 10 }} />
    </Urls>

</>


const Content = styled.div`
    display:flex;
    flex:1;
    @media (max-width: 600px) {
        flex-direction:column-reverse;
        text-align:center;
    }
`;
const Intro = styled.div`
    display:flex;
    flex-direction:column;
    max-width:500px;
    padding:10px 20px;
    justify-content:center;
    h3{
        font-size:.9em;
    }
    div{
        font-size:.7em;
    }
`;
const Illustration = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    justify-content:center;
`;
const Urls = styled.div`
    display:flex;
    flex-direction:column;
    @media (min -width: 600px) {
        
    justify-content:center;
    align-items:center;
    }
`

import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { instagram, facebook, twitter } from 'react-icons-kit/feather'
import { dribbble, behance } from 'react-icons-kit/fa'
export default (props) => <>
    <div style={{display:'flex'}}>
        <Content>
            <Intro>
                {props.Intro}
            </Intro>
            <Illustration>
                {props.Illustration}
            </Illustration>
        </Content>
        <Urls>
            <Link href="/about"><a><Icon icon={instagram} style={{ padding: 10 }} /></a></Link>
            <Link href="/about"><a><Icon icon={facebook} style={{ padding: 10 }} /></a></Link>
            <Link href="/about"><a><Icon icon={twitter} style={{ padding: 10 }} /></a></Link>
            <Link href="/about"><a><Icon icon={dribbble} style={{ padding: 10 }} /></a></Link> 
            {/* <Icon icon={behance} style={{ padding: 10 }} /> */}
        </Urls>
    </div>
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
    text-align:left;
    line-height:1.2em;
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
import styled from 'styled-components'
import { ThemedButton } from '../Theme'
import NavLink from 'next/link'
export default () => { 
    return (
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: '20px 0px' }}>
            <h3 style={{ fontFamily: 'monospace', flex: 1 }}>  -///-   </h3>
            <NavWrapper>
                <NavLink href="/"><a style={{ padding: '5px 10px' }}>Home</a></NavLink>
                {/* <NavLink href="/projects"><a style={{ padding: '5px 10px' }}>Projects</a></NavLink> */}
                <NavLink href="/blog"><a style={{ padding: '5px 10px' }}>Blog</a></NavLink>
                <NavLink href="/now"><a style={{ padding: '5px 10px' }}>Now</a></NavLink>
            </NavWrapper>
            <ThemedButton />
        </nav>
    )
}

const NavWrapper = styled.div`
    display:flex; 
    list-style:none;   
    a:hover{
        background:${props => props.theme.tint}; 
        border-radius:5px;
    }
`
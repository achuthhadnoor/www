import PageLayout from '../Layout/PageLayout'
import styled from 'styled-components'

const Shorts = () => (
    <PageLayout
        title="Donate ♥"
        description="If you currently use my apps and would love to support me doing that.Then you can help me out 😊"
    >
        <H1>Monthly Donations </H1>
        <Description>You can send me monthly tips to get a coffee and keep myself recharged and work more</Description>
        <ul>
            <Li>
                <a href="https://buymeacoffee/achuthhadnoor">Member on buymeacoffee</a>
            </Li>
        </ul>
    </PageLayout>
)

const H1 = styled.h1`
    font-size:2em;
    padding:10px 0px;
`

const Description = styled.p``

const Ul = styled.li`
list-style:cjk-ideographic;
`
const Li = styled.li`
    padding:10px;
`


export default Shorts;
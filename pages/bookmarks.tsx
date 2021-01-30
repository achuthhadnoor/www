import styled from 'styled-components'
import { NextRouter, useRouter } from 'next/router'
import PageLayout from '../Layout/PageLayout'
import Link from 'next/link'
import { BOOKMARKS, BOOMARK_TABS } from '../constants'

const Bookmarks = () => {
    const router = useRouter();
    return (
        <PageLayout
            title="Bookmarks"
            description="Creative / informational links and inspirations around the web "
        >
            <TabWrapper>
                {
                    BOOMARK_TABS.map((tab, i) => (
                        <Link href={tab.link} key={i} >
                            <Tab isActive={tab.link === router.asPath}>
                                {tab.title}
                            </Tab>
                        </Link>
                    ))
                }
            </TabWrapper>
            <TabContent>
                {renderTabs()}
            </TabContent>
        </PageLayout>
    )
}

const renderTabs = () => {
    const router = useRouter();
    switch (router.query.tab) {
        case 'all':
            return <div>{
                BOOKMARKS.map((bookmark, i) => <div>
                    {bookmark.title}
                </div>)
            }</div>
        case 'links':
            return <div>links</div>

        case 'portfolios':
            return <div>portfolios</div>

        case 'podcasts':
            return <div>podcasts</div>

        default:
            return <div>not found</div>

    }
}
 

const TabContent = styled.div`
    padding-top:1em;
`

const TabWrapper = styled.div`
    display:flex; 
    overflow:auto;
    max-width:400px; 
    text-transform:uppercase;
    font-size:.8em;
    a{
        flex:1;
        padding:10px
    }
`;

const Tab = styled.a`
    text-align:center;
    cursor:pointer;
    ${({ isActive, theme }) => isActive ? `
    color:${theme.color2};
        border-bottom:1px solid ${theme.color2};
    `:
        `
    color:${theme.color3};
    border-bottom:1px solid ${theme.color3};
    `
    }
`;

export default Bookmarks;
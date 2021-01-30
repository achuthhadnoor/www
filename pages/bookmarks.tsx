import styled from 'styled-components'
import { useRouter } from 'next/router'
import PageLayout from '../Layout/PageLayout'
import { useState } from 'react'
import Link from 'next/link'
import { BOOMARK_TABS } from '../constants'

const Bookmarks = () => {
    const [activeTab, setActiveTab] = useState('All');
    const router = useRouter();
    console.log(router.asPath);


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
        </PageLayout>
    )
}


const TabWrapper = styled.div`
    display:flex; 
    overflow:auto;
    a{
        flex:1;
        padding:10px
    }
`;

const Tab = styled.a`
    text-align:center;
    ${({ isActive, theme }) => isActive && `
        color:${theme.color3};
        border-bottom:1px solid ${theme.color3};
    `}
`;

export default Bookmarks;
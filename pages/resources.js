import Container from '@/components/Container';
import { useEffect, useState } from 'react';
import resourcesData from '../data/resources.json'

const Resources = ({ tab, tabs, resources }) => {
    const [selectedTab, setSelectedTab] = useState(tab);
    useEffect(() => {
        setSelectedTab(tab);
    }, [tab])
    return (
        <Container
            title="Resources - Tools and articles"
            description="A curated list of resources for web developers"
            image="/images/resources.png"
        >
            <h1 className="px-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Resources</h1>
            <p className="px-2 py-4">
              Intresting and usefull Portfolios, Articles,Videos around the web.
            </p>
            <div className="grid sm:grid-cols-3">
                <div className="col-span-2 p-4 sm:col-span-1">
                    <h2 className="text-indigo-600 font-semibold py-4">Categories</h2>
                    <ul className="capitalize text-sm grid grid-cols-2 sm:grid-cols-1">
                        {
                            tabs.map((t, i) => ( 
                                    <li 
                                        key={`t-${i}-${t}`}
                                        onClick={() =>setSelectedTab(t)}
                                        className={`${t.replace(/ /g, '') === selectedTab ? 'bg-indigo-50 text-indigo-600  sm:border-indigo-600 sm:border-r-4' : 'hover:bg-indigo-50 '} mt-2 p-2 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer  rounded-md  text-left`}>
                                        {t}
                                    </li> 
                            ))
                        }
                    </ul>
                </div>
                <div className="sm:col-span-2" >
                    <div className="grid sm:grid-cols-2 mt-5">
                        {
                            resources.map((bookmark, i) => {
                                if (selectedTab === 'All' || selectedTab === undefined) {
                                    return (
                                        <a href={bookmark.link} target="_blank" key={`resources-${i}`} className="p-4 m-2 max-w-md overflow-auto bg-white text-a" title={bookmark.url}>
                                            <div className="p-1">
                                                {bookmark.title}
                                            </div>
                                            <span className={`uppercase p-1 mx-2 rounded-md bg-indigo-50 text-indigo-400 text-xs inline-block`}> {bookmark.tag}</span>
                                            <div className="p-1 text-sm text-gray-400">{bookmark.description}</div>
                                        </a>
                                    )
                                }
                                return bookmark.tag === selectedTab &&
                                    <a href={bookmark.link} target="_blank" key={`resources-${i}`} className="p-4 m-2 max-w-md overflow-auto bg-white" title={bookmark.url}>
                                        <div className="p-1">
                                            {bookmark.title}
                                        </div>
                                        <span className={`uppercase p-1 mx-2 rounded-md bg-indigo-50 text-indigo-400 text-xs inline-block`}> {bookmark.tag}</span>
                                        <div className="p-1 text-sm text-gray-400">{bookmark.description}</div>
                                    </a>
                            })
                        }
                    </div>
                </div >
            </div >
        </Container >
    )
};

Resources.getInitialProps = ({ query }) => {
    let tab = 'All';
    if (query.tab) {
        tab = query.tab;
    }
    let tabs = [
        "All",
        "Books",
        "Blog",
        "Color",
        "Community",
        "Design Patterns",
        "Design Systems",
        "Design Studios",
        "Emails",
        "Gaming",
        "Guides",
        "Media",
        "Newsletters",
        "Plugins",
        "Resources",
        "Software & Tools",
        "Web Standards"
    ];
    return {
        tab: tab,
        tabs: tabs,
        resources: resourcesData
    }
}
export default Resources;
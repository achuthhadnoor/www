import Container from '@/components/Container';
import resourcesData from '../data/resources.json'

const Resources = ({ tab, tabs, resources }) => {
    console.log(tab);
    return (
        <Container>
            <h1 className="text-4xl font-semibold">Resources</h1>
            <div className="grid sm:grid-cols-3">
                <div className="col-span-2 p-4 sm:col-span-1">
                    <h2 className="text-indigo-600 font-semibold py-4">Categories</h2>
                    <ul className="capitalize text-sm grid grid-cols-2 sm:grid-cols-1">
                        {
                            tabs.map((t, i) => (
                                <a key={`t-${i}-${t}`} href={`?tab=${t.replace(/ /g, '')}`}>
                                    <li className={`${t.replace(/ /g, '') === tab ? 'bg-indigo-50 text-indigo-600  border-indigo-600 border-r-4' : 'hover:bg-indigo-50 '} mt-2 p-2 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer  rounded-md`}>
                                        {t}
                                    </li>
                                </a>
                            ))
                        }
                    </ul>
                </div>
                <div className="sm:col-span-2" >
                    <div className="grid sm:grid-cols-2 mt-5">
                        {
                            resources.map((bookmark, i) => {
                                if (tab === 'All' || tab === undefined) {
                                    return (
                                        <a href={bookmark.link} target="_blank" key={`resources-${i}`} className="p-4 m-2 max-w-md overflow-auto bg-white" title={bookmark.url}>
                                            <div className="p-1">
                                                {bookmark.title}
                                            </div>
                                            <div className="p-1 text-sm text-gray-400">{bookmark.description}</div>
                                        </a>
                                    )
                                }
                                return bookmark.tag === tab &&
                                    <a href={bookmark.link} target="_blank" key={`resources-${i}`} className="p-4 m-2 max-w-md overflow-auto bg-white" title={bookmark.url}>
                                        <div className="p-1">
                                            {bookmark.title}
                                        </div>
                                        <div className="p-1 text-sm text-gray-400">{bookmark.description}</div>
                                    </a>
                            })
                        }
                    </div>
                </div >
            </div >
        </Container>
    )
};

Resources.getInitialProps = ({ query }) => {
    let tab = 'All';
    if (query.tab) {
        tab = query.tab;
    }
    console.log(tab);
    return {
        tab: tab,
        tabs: resourcesData.tabs,
        resources: resourcesData.resources
    }
}
export default Resources;
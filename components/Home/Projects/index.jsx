import { Lapse, SilentShot, Snipcode, Snippy } from '@/components/icons/apps'

const Projects = () => {
    const projects = [
        {
            name: 'lapse',
            summary: "An instant time-lapse screen recording app for mac and windows.",
            link: "https://lapse.achuth.dev",
            icon: <Lapse/>
        }, {
            name: 'Silentshot',
            summary: " An instant distraction free screenshot tool",
            link: "https://lapse.achuth.dev",
            icon: <SilentShot/>
        }, {
            name: 'Snipcode',
            summary: "Simple code snippet manager",
            link: "https://snipcode.achuth.dev",
            icon: <Snipcode/>
        }, {
            name: 'Snippy',
            summary: "Your second digital brain",
            link: "https://snippy.achuth.dev",
            icon: <Snippy/>
        },

    ]
    return (
        <div className="px-4">
            <div className="flex items-center mt-5">
                <h1 className="text-xl font-semibold flex-1">Apps</h1>
                <a className="p-1 text-gray-400 hover:text-gray-700 text-sm" href="https://achuth.dev/producthunt" target="_blank">View all apps →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-2">
                {
                    projects.map((p, i) => (
                        <a href="https://lapse.achuth.dev" target="_blank" key={`projects-${i}`}>
                            <div className="mt-5 flex items-center sm-pr-2">
                                <div>
                                   {p.icon}
                                </div>
                                <div className="px-2">
                                    <h1 className="font-semibold inline-block rounded-md bg-yellow-50 hover:bg-yellow-100 px-2">{p.name}</h1>
                                    <p className="text-sm leading-relaxed text-gray-600  px-2">
                                       {p.summary}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))
                }
                </div>
        </div>
    )
};

export default Projects
import Link from 'next/link'

const Projects = () => {
    const projects = [
        {
            name: 'lapse',
            summary: "An instant time-lapse screen recording app for mac and windows.",
            link:"https://lapse.achuth.dev"
        }
    ]
    return (
        <div className="px-4">
            <div className="flex items-center mt-5">
                <h1 className="text-xl font-semibold flex-1">Apps</h1>
                <a className="p-1 text-gray-400 hover:text-gray-700 text-sm" href="https://achuth.dev/producthunt" target="_blank">View all apps →</a>
            </div>
            <div className="grid grid-cols-1 px-2">
                <div className="mt-5">
                    <a href="https://lapse.achuth.dev" target="_blank"><h1 className="font-semibold inline-block rounded-md bg-yellow-50 hover:bg-yellow-100 px-2">Lapse</h1></a>
                    <p className="text-sm leading-relaxed text-gray-600  px-2">
                        An instant time-lapse screen recording app for mac and windows
                </p>
                </div>
            </div>
        </div>
    )
};

export default Projects
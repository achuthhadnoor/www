import Link from 'next/link'

const Projects = () => (
    <>
        <div className="flex items-center mt-5">
            <h1 className="text-xl font-semibold flex-1">Projects</h1>
            <Link href="/blog"><a className="p-1 text-gray-400 hover:text-gray-700">Read all posts →</a></Link>
        </div>
    </>
);

export default Projects
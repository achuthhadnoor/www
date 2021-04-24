const Articles = () => (
    <>
        <h1 className="text-xl mt-5 font-semibold">Recent Articles</h1>
        <div className="grid mb-10 sm:grid-cols-2 sm:mx-0 ">
            <div className="mt-5 max-w-md">
                <div className="my-2 text-xs"><span className="text-gray-500">April 24,2021</span><span className="px-1 py-1 mx-1 bg-red-50 rounded-md text-red-400"> Marketing</span></div>
                <div>
                    <h3 className="font-semibold">What i learned from a $1k through affiliate marketing</h3>
                    <p className="text-gray-600">Lessons and takeaways from my experience of bringing apps to uses using affiliate marketers</p>
                </div>
            </div>
            <div className="mt-5 max-w-md">
                <div className="my-2 text-xs"><span className="text-gray-500">April 21,2021</span><span className="px-1 py-1 mx-1 bg-indigo-50 rounded-md text-indigo-600"> Design</span></div>
                <div>
                    <h3 className="font-semibold">Personal branding is more influential than long list of portfolio projects</h3>
                    <p className="text-gray-600">Portfolio projects help you undertand the design problems in the existing design project. but personal branding helps you create a design system</p>
                </div>
            </div>
            <div className="mt-5 max-w-md">
                <div className="my-2 text-xs"><span className="text-gray-500">April 21,2021</span><span className="px-1 py-1 mx-1 bg-indigo-50 rounded-md text-indigo-600"> Design</span></div>
                <div>
                    <h3 className="font-semibold">Personal branding is more influential than long list of portfolio projects</h3>
                    <p className="text-gray-600">Portfolio projects help you undertand the design problems in the existing design project. but personal branding helps you create a design system</p>
                </div>
            </div>
            <div className="mt-5 max-w-md">
                <div className="my-2 text-xs"><span className="text-gray-500">April 21,2021</span><span className="px-1 py-1 mx-1 bg-indigo-50 rounded-md text-indigo-600"> Design</span></div>
                <div>
                    <h3 className="font-semibold">Personal branding is more influential than long list of portfolio projects</h3>
                    <p className="text-gray-600">Portfolio projects help you undertand the design problems in the existing design project. but personal branding helps you create a design system</p>
                </div>
            </div>
        </div>
        <span className="transform uppercase font-bold text-xs"> Read more {'> > >'}</span>
    </>
)

export default Articles;
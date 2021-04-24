const Hero = () => (
    <header className="p-4 sticky top-0 bg-white bg-transparent backdrop-filter backdrop-blur-xl  overflow-auto">
        <nav className="flex items-center ">
            <span>-///-</span>
            <span className="flex-1"></span>
            <div className="flex ">
                <a href="/#" className="ml-2 px-2 py-1 hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">home</a>
                <a href="/#articles" className="ml-2 px-2 py-1 hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">articles</a>
                <a href="/#newsletter" className="ml-2 px-2 py-1 hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">newsletter</a>
                <a href="/#newsletter" className="ml-2 px-2 py-1 hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">blog</a>
            </div>
        </nav>
    </header>
)

export default Hero;
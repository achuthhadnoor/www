import Social from './social'
const footer = ()=>(
    <footer className="flex items-center border-t-2 border-gray-100 mx-5 py-5 ">
    <span>-///-</span>
    <span className="flex-1"></span>
    <div className="flex flex-col">
        <h1 className="text-right text-lg py-1 px-5">Achuth Hadnoor</h1>
        <Social/>
    </div>
    </footer>
)

export default footer;
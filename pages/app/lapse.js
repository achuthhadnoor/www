import Container from "@/components/Container";

const App = () => {
    return (<Container>

        <h1 className="mt-30 text-6xl font-semibold mx-8">lapse</h1>
        <div className="grid grid-cols-4 mx-8 mt-5">
            <div>
                <h3 className="font-light text-gray-500">Framework</h3>
                <p>React, electron</p>
            </div>
            <div>
                <h3 className="font-light text-gray-500">Platform</h3>
                <p> macos {'>'} 10 </p>
            </div>
            <div>
                <h3 className="font-light text-gray-500">Category</h3>
                <p>Productivity</p>
            </div>
        </div>
    </Container>)
}

export default App;
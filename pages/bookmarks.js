import Container from "@/components/Container";
import bookmarks from '../data/bookmarks.json'
export default function Bookmarks(){
    return(
        <Container
            title="Bookmarks"
            description="A collection of items on my confused mind 😜"
        >
            <h1 className="mt-10 px-4 py-2 text-xl sm:text-3xl font-semibold">
                Bookmarks
            </h1>
            <p className="px-4">
                My collection of some randome links 😝.
            </p>
                <div className="grid sm:grid-cols-2 mt-5">
                {
                    bookmarks.map((bookmark,i)=>(
                        <a href={bookmark.url} target="_blank" key={`bookmark-${i}`} className=" max-w-md overflow-auto">
                            <div className="p-4 m-2 bg-white">
                            {bookmark.title}
                            </div>
                        </a>
                    ))
                }
                </div>
        </Container>
    )
}
import Container from "@/components/Container";
import bookmarks from '../data/bookmarks.json'
export default function Bookmarks() {
    return (
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
                    bookmarks.map((bookmark, i) => (<>
                        { bookmark.url &&
                            <a href={bookmark.url} target="_blank" key={`bookmark-${i}`} className="p-4 m-2 max-w-md overflow-auto bg-white" title={bookmark.url}>
                            <div className="p-1">
                                {bookmark.title}
                            </div>
                            <div className="text-xs text-gray-400">{bookmark.url}</div>
                        </a>
                        }
                        </>
                    ))
                }
            </div>
        </Container>
    )
}
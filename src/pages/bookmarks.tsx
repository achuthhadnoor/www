import Container from "@/components/Container";
import { BOOKMARKS as bookmarks } from "@/data/bookmarks";
export default function Bookmarks() {
  return (
    <Container
      title="Bookmarks"
      description="A collection of items on my confused mind 😜"
      image="/images/bookmarks.png"
    >
      <h1 className="mb-4 px-2 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Bookmarks
      </h1>
      <p className="px-2 py-4">My collection of some randome links 😝.</p>
      <div className="mt-5 grid sm:grid-cols-2">
        {bookmarks.map((bookmark, i) => (
          <>
            {bookmark.url && (
              <a
                rel="noreferrer"
                href={bookmark.url}
                target="_blank"
                key={`bookmark-${i}`}
                className="m-2 max-w-md overflow-auto rounded bg-gray-50 p-4 dark:bg-gray-800"
                title={bookmark.url}
              >
                <div className="p-1">{bookmark.title}</div>
                <div className="max-w-md overflow-hidden text-xs text-gray-400">
                  {bookmark.url}
                </div>
              </a>
            )}
          </>
        ))}
      </div>
    </Container>
  );
}

import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

const Apps = () => {
  return (
    <Container>
      <h1 className="px-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Apps
      </h1>
      <p className="px-2 py-4">Apps that help you during the day 👻</p>
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        <Link href="/apps/lapse">
          <a className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
            <Image
              alt="Achuth Hadnoor"
              height={176}
              width={176}
              src="/images/pages/apps/lapse.png"
              className=""
            />
            <div className="flex items-center my-2">
              <h3 className="text-2xl font-semibold px-1">Lapse</h3>
              <div className="mx-2">
                <span className="bg-green-300 py-1 px-2 text-sm rounded mx-1">
                  new
                </span>
                <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                  macos
                </span>
              </div>
            </div>
            <p className="p-1">Timelapse screen recording app </p>
          </a>
        </Link>
        <div className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            alt="Achuth Hadnoor"
            height={176}
            width={176}
            src="/images/pages/apps/silentshot.png"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Silentshot</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture screenshot to clipboard or save them to a directory in
            background
          </p>
        </div>

        <div className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            alt="Achuth Hadnoor"
            height={176}
            width={176}
            src="/images/pages/apps/mirror-2.png"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Mirror</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Webcam companion for your native screen recorder and also to preview
            your zoom calls 🤭
          </p>
        </div>
        <div className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            alt="Achuth Hadnoor"
            height={176}
            width={176}
            src="/images/pages/apps/today.png"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Today</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            A simple notes app on menubar to jot down your thoughts 💭
          </p>
        </div>
        <div className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            alt="Achuth Hadnoor"
            height={176}
            width={176}
            src="/images/pages/apps/snipcode.png"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Snipcode</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                web
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture your frequently used code snippets from any app and share to
            any app instantly{" "}
          </p>
        </div>
        <div className="bg-white p-4 m-2 rounded hover:transition hover:shadow-lg hover:duration-500 ease-in-out">
          <Image
            alt="Achuth Hadnoor"
            height={176}
            width={176}
            src="/images/pages/apps/snippy.png"
          />
          <div className="flex items-center my-2">
            <h3 className="text-2xl font-semibold px-1">Snippy</h3>
            <div className="mx-2">
              <span className="bg-yellow-300 py-1 px-2 text-sm rounded mx-1">
                coming soon
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                macos
              </span>
              <span className="bg-gray-100 py-1 px-2 text-sm rounded mx-1">
                web
              </span>
            </div>
          </div>
          <p className="p-1">A space for your creative work on the web</p>
        </div>
      </div>
    </Container>
  );
};

export default Apps;

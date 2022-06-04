import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const Apps = () => {
  return (
    <Container>
      <h1 className="mb-4 px-2 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Apps
      </h1>
      <p className="px-2 py-4">Apps that help you during the day 👻</p>
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        <Link href="/apps/lapse">
          <a className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
            <Image
              src="/images/apps/lapse.png"
              alt="Achuth Hadnoor"
              height={100}
              width={176}
              layout="responsive"
              className="h-[100] w-[180]"
            />
            <div className="my-2 flex items-center">
              <h3 className="px-1 text-2xl font-semibold">Lapse</h3>
              <div className="mx-2">
                <span className="mx-1 rounded bg-green-300 py-1 px-2 text-sm dark:bg-green-700">
                  new
                </span>
                <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                  macos
                </span>
              </div>
            </div>
            <p className="p-1">Timelapse screen recording app </p>
          </a>
        </Link>
        <div className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
          <Image
            src="/images/apps/silentshot.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="my-2 flex items-center">
            <h3 className="px-1 text-2xl font-semibold">Silentshot</h3>
            <div className="mx-2">
              <span className="mx-1 rounded bg-yellow-300 py-1 px-2 text-sm dark:bg-yellow-600">
                coming soon
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture screenshot to clipboard or save them to a directory in
            background
          </p>
        </div>

        <div className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
          <Image
            src="/images/apps/mirror-2.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="my-2 flex items-center">
            <h3 className="px-1 text-2xl font-semibold">Mirror</h3>
            <div className="mx-2">
              <span className="mx-1 rounded bg-yellow-300 py-1 px-2 text-sm dark:bg-yellow-600">
                coming soon
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            Webcam companion for your native screen recorder and also to preview
            your zoom calls 🤭
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
          <Image
            src="/images/apps/today.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="my-2 flex items-center">
            <h3 className="px-1 text-2xl font-semibold">Today</h3>
            <div className="mx-2">
              <span className="mx-1 rounded bg-yellow-300 py-1 px-2 text-sm dark:bg-yellow-600">
                coming soon
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                macos
              </span>
            </div>
          </div>
          <p className="p-1">
            A simple notes app on menubar to jot down your thoughts 💭
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
          <Image
            src="/images/apps/snipcode.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="my-2 flex items-center">
            <h3 className="px-1 text-2xl font-semibold">Snipcode</h3>
            <div className="mx-2">
              <span className="mx-1 rounded bg-yellow-300 py-1 px-2 text-sm dark:bg-yellow-600">
                coming soon
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                macos
              </span>
              <span className="bg-gray-100da rk:bg-gray-700 mx-1 rounded py-1 px-2 text-sm">
                web
              </span>
            </div>
          </div>
          <p className="p-1">
            Capture your frequently used code snippets from any app and share to
            any app instantly{" "}
          </p>
        </div>
        <div className="bg-gray-50dark:bg-gray-800 m-2 rounded p-4 ease-in-out hover:shadow-lg hover:transition hover:duration-500 hover:dark:bg-gray-800">
          <Image
            src="/images/apps/snippy.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180]"
          />
          <div className="my-2 flex items-center">
            <h3 className="px-1 text-2xl font-semibold">Snippy</h3>
            <div className="mx-2">
              <span className="mx-1 rounded bg-yellow-300 py-1 px-2 text-sm dark:bg-yellow-600">
                coming soon
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
                macos
              </span>
              <span className="mx-1 rounded bg-gray-100 py-1 px-2 text-sm dark:bg-gray-700">
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

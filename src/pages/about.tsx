import Image from "next/image";
import Container from "../layouts/Container";
import * as Icons from "../components/icons";

export default function Home() {
  return (
    <Container>
      <Image
        className="rounded-md"
        height={650}
        width={1080}
        src={"/assets/img/achuth.jpg"}
        alt="Achuth Hadnoor"
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="mt-5 text-2xl">About me</h2>
        <div className="my-5">
          <p className="mt-10 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            👋 Hey, I am a Designer, Developer and maker from India 🇮🇳. In
            short, I love creating and building stuff. ✨ Welcome to my little
            slice of the internet. I hope you find something useful!
          </p>
          <p className="mt-10 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
            Innovative, task-driven professional with 6+ years of experience in
            web design and development across diverse industries. Equipped with
            a record of success in consistently identifying and providing the
            technological needs of companies through ingenious innovation.
            Proficient in developing applications, creating user interfaces,
            writing and testing codes, troubleshooting simple/complex issues,
            and implementing new features based on user feedback.
          </p>
          <p className="mt-10 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
            I am currently working on projects that help creators and designers.
            Most recently I started working on Screenshot editing app for
            Desktop that helps you make beitiful screenshots in seconds.
          </p>
        </div>
        <hr className="wave my-20" />

        <div className="my-5">
          <h2 className="text-2xl">Work</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            I have an experience as a web developer working with Design systems,
            React ecosystems and AWS cloud.
          </p>
          <div className="my-5 flex flex-col gap-2 space-y-4 text-sm md:space-y-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-neutral-800 dark:text-neutral-200">
                DBS Bank
              </span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 text-neutral-500 md:px-4">
                  Fontend Developer
                </span>
                <span className="text-xs text-neutral-600">2020 - present</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-neutral-800 dark:text-neutral-200">
                EPAM Systems
              </span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 text-neutral-500 md:px-4">
                  Software Engineer
                </span>
                <span className="text-xs text-neutral-600">2020 - present</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-neutral-800 dark:text-neutral-200">
                Vistex Asia Pacific
              </span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 text-neutral-500 md:px-4">Developer</span>
                <span className="text-xs text-neutral-600">2016 - 2020</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="wave my-20" />
        <div className="my-5">
          <h2 className="text-2xl">Find me online</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            There are many places where we can share and collaborate in the
            internet. These are the few places where I showcase, collaborate and
            sell my products
          </p>
          <div className="spax-y-4 mt-5 flex flex-col gap-4 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.twitter.com/achuth_hadnoor"
            >
              <span>
                <Icons.Social name={"twitter"} />
              </span>
              <span>
                <b>Twitter</b> - build in public
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.dribbble.com/achuth_hadnoor"
            >
              <span>
                <Icons.Social name={"dribbble"} />
              </span>
              <span>
                <b>Dribbble</b> - Design
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.github.com/achuthhadnoor"
            >
              <span>
                <Icons.Social name="github" />
              </span>
              <span>
                <b>Github</b> - Showcase my code and collaborate on opensource
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.linked.com/in/achuth_hadnoor"
            >
              <span>
                <Icons.Social name={"linkedin"} />
              </span>
              <span>
                <b>LinkedIn</b> - Professional network
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.instagram.com/achuth.hadnoor"
            >
              <span>
                <Icons.Social name={"instagram"} />
              </span>
              <span>
                <b>Instagram</b> - Design education
              </span>
            </a>
          </div>
        </div>
        <hr className="wave my-20" />
        <div className="my-5">
          <h2 className="text-2xl">About the site</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            This website contains all the work that is created, curated and
            maintained by Achuth hadnoor. The goal of this website is to have a
            single source of truth of the content that Achuth has on the
            internet.
          </p>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            For queries, suggestion and copy rights please contact.{" "}
            <a className="underline" href="mailto:hey@achuth.dev">
              hey@achuth.dev
            </a>
          </p>
        </div>
        <hr className="wave my-10" />
      </div>
    </Container>
  );
}

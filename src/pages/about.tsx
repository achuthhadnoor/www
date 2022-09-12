import Image from "next/image";
import Container from "../layouts/Container";

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
      {/* <h1 className="font-semibold text-3xl md:text-5xl my-5">About me</h1> */}
      <div className="my-5">
        <p className="mt-2 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
          👋 Hey, I am a Designer, Developer and maker from India 🇮🇳. In short,
          I love creating and building stuff. ✨ Welcome to my little slice of
          the internet. I hope you find something useful! If you’re curious,
          read more about me.
        </p>
        <p className="mt-2 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
          Innovative, task-driven professional with 6+ years of experience in
          web design and development across diverse industries. Equipped with a
          record of success in consistently identifying and providing the
          technological needs of companies through ingenious innovation.
          Proficient in developing applications, creating user interfaces,
          writing and testing codes, troubleshooting simple/complex issues, and
          implementing new features based on user feedback.
        </p>
      </div>
      <hr className="wave my-20" />

      <div className="my-5">
        <h2 className="text-2xl">Work</h2>
        <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
          I have an experience as a web developer working with React ecosystems
          and AWS cloud.
        </p>
        <div className="flex flex-col gap-2 text-sm my-5 space-y-4 md:space-y-2">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
            <span className="text-md text-blue-600">EPAM Systems</span>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <span className="py-2 md:px-4">Software Engineer</span>
              <span className="text-neutral-500 text-xs">2020 - present</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
            <span className="text-md text-blue-600">Vistex Asia Pacific</span>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <span className="py-2 md:px-4">Developer</span>
              <span className="text-neutral-500 text-xs">2016 - 2020</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="wave my-20" />
      <div className="my-5">
        <h2 className="text-2xl">About the site</h2>
      </div>
    </Container>
  );
}

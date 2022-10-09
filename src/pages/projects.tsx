import Image from "next/image";
import Container from "../layouts/Container";

export default function Home() {
  const projects = [
    {
      id: "lapse",
      title: "Lapse",
      description: "A simple app to record screen in time-lapse.",
      url: "getlapseapp.com",
      image: "/assets/img/lapse.png",
    },
    {
      id: "focus",
      title: "Focus",
      description: "Take timeoff from screen to focus",
      url: "focus.achuth.dev",
      image: "/assets/img/focus.png",
    },
    {
      id: "snipcode",
      title: "snipcode",
      description: "Code snippet manager on menubar",
      url: "snipper.netlify.app",
      image: "/assets/img/snipcode.png",
    },
    {
      id: "snip",
      title: "snip",
      description: "Single line code snippet manager on menubar",
      url: "snip.netlify.app",
      image: "/assets/img/snip.png",
    },
    {
      id: "snipnote",
      title: "snipnote",
      description: "Simple note taking on menubar",
      url: "snipnote.achuth.dev",
      image: "/assets/img/snipnote.png",
    },
    {
      id: "captur",
      title: "Captur",
      description: "A simple screen recording appr",
      url: "captur.achuth.dev",
      image: "/assets/img/captur.png",
    },
    {
      id: "snippy",
      title: "Snippy",
      description: "A screenshot tool to get things done",
      url: "snippy.achuth.dev",
      image: "/assets/img/snippy.png",
    },
  ];
  return (
    <Container>
      <h1 className="mb-10 text-3xl font-semibold md:text-5xl">Projects</h1>
      <p className="text-md mt-2 leading-loose text-neutral-700 dark:text-neutral-500">
        Here’s a small selection of some of my recent projects and experiences.
      </p>
      <hr className="wave my-10" />
      {projects.map((project) => (
        <div key={project.id} id={project.id}>
          <Image
            className="rounded-2xl "
            height={750}
            width={1080}
            src={project.image}
            alt="Lapse app"
          />
          <h2 className="my-10 text-xl font-semibold md:text-3xl">
            {project.title}
          </h2>
          <p className="my-5">{project.description}</p>
          <a
            className="rounded-xl bg-neutral-200/50 py-2 px-4 text-sm hover:bg-blue-600 hover:text-neutral-100 dark:bg-neutral-800"
            href={`https://${project.url}`}
          >
            <span>{project.url}</span>
            <span className="scale-110 transform"> ↗ </span>
          </a>
          <hr className="wave my-10" />
        </div>
      ))}
    </Container>
  );
}

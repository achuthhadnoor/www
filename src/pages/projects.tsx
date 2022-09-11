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
  ];
  return (
    <Container>
      <h1 className="font-semibold text-3xl md:text-5xl mb-10">Projects</h1>
      <p className="mt-2 text-md leading-loose text-neutral-700 dark:text-neutral-500">
        Here’s a small selection of some of my recent projects and experiences.
      </p>
      <hr className="wave my-10" />
      {projects.map((project) => (
        <div key={project.id}>
          <Image
            className="rounded-2xl "
            height={750}
            width={1080}
            src={project.image}
            alt="Lapse app"
          />
          <h2 className="font-semibold text-xl md:text-3xl my-10">
            {project.title}
          </h2>
          <p className="my-5">{project.description}</p>
          <a
            className="rounded-full py-1 px-4 bg-neutral-800 hover:bg-blue-600"
            href={`https://${project.url}`}
          >
            <span>{project.url}</span>
            <span className="transform scale-110"> ↗ </span>
          </a>
          <hr className="wave my-10" />
        </div>
      ))}
    </Container>
  );
}

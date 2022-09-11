import Container from "../layouts/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="font-semibold text-3xl md:text-5xl mb-10">Projects</h1>
      <p className="mt-2 text-md leading-loose text-neutral-700 dark:text-neutral-500">
        Here’s a small selection of some of my recent projects and experiences.
      </p>
      <hr className="wave my-20" />
    </Container>
  );
}

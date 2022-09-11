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
      />
      <div className="my-5">
        <h2 className="text-2xl">About me </h2>
        <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
          I am a web developer
        </p>
      </div>

      <div className="my-5">
        <h2 className="text-2xl">Work</h2>
        <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
          work here
        </p>
      </div>
      <div className="my-5">
        <h2 className="text-2xl">About the site</h2>
      </div>
    </Container>
  );
}

import Head from "next/head";
import Image from "next/image";
import Container from "../layouts/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <h1 className="my-10 text-3xl font-semibold md:text-5xl">Tools</h1>
      <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
        The apps, products and services that I use daily for work and life.
      </p>
      <hr className="wave my-10" />
      <div>
        <h3 className="text-xl">Everyday</h3>
        <p className="my-5 max-w-2xl text-sm text-neutral-500">
          Stuff I use almost every day in my personal life from everyday carry,
          my car, and my phone
        </p>
        <ul className="flex flex-col gap-4 text-sm">
          <li>one plus 9RT</li>
          <li>Amazefit</li>
          <li>{`Macbook Pro 13'`}</li>
        </ul>
        <hr className="wave my-10" />
      </div>
    </Container>
  );
}

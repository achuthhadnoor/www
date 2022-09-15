import Head from "next/head";
import Image from "next/image";
import Container from "../layouts/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <h1 className="font-semibold text-3xl md:text-5xl my-10">Tools</h1>
      <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
        The apps, products and services that I use daily for work and life.
      </p>
      <hr className="wave my-10" />
      <div>
        <h3 className="text-xl">Everyday</h3>
        <p className="text-sm text-neutral-500 max-w-2xl my-5">
          Stuff I use almost every day in my personal life from everyday carry,
          my car, and my phone
        </p>
        <ul className="text-sm flex flex-col gap-4">
          <li>one plus 9RT</li>
          <li>Amazefit</li>
          <li>{`Macbook Pro 13'`}</li>
        </ul>
        <hr className="wave my-10" />
      </div>
    </Container>
  );
}

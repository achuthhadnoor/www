import Head from "next/head";
import Image from "next/image";
import Container from "../layouts/Container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <h1 className="font-semibold text-3xl md:text-5xl my-10">Tools</h1>
      <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
        The apps, products and services that I use in my daily life.
      </p>
      <hr className="wave my-10" />
    </Container>
  );
}

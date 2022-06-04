import React from "react";
import Container from "@/components/Container";
import Image from "next/image";

const Home = () => {
  return (
    <Container
      title="About – Achuth Hadnoor"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="mb-20 flex flex-col gap-6 sm:flex-row">
        <div className="h-[400] w-[400] align-middle sm:justify-center">
          <Image
            src="/images/achuth.jpg"
            alt="Achuth Hadnoor"
            height={400}
            width={400}
            className="h-[100] w-[180] rounded-xl"
          />
        </div>
        <div>
          <h1 className="my-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text  text-2xl font-semibold text-transparent dark:from-blue-500 dark:via-green-300 dark:to-green-500">
            Hi! You can call me Achuth.
          </h1>
          <p className="max-w-lg text-sm leading-loose">
            Achuth Hadnoor is a self-taught Designer, Developer, Maker.
            Currently, he works at DBS. he is known for his{" "}
            <b>applications, beautiful designs and the drive to hustle</b>.
            <br />
            <br />
            Achuth’s proudest achievement is his applications hit{" "}
            <b>#1 twice on producthunt</b>. During the pendamic he created a{" "}
            <b>time-lapse screen recording app</b> that helps{" "}
            <b>1000+ creators</b> to make <b>instant time-lapse</b> of their{" "}
            <b>digital work</b> and share them on platforms like youtube{" "}
            <b>20X faster</b>.
            <br />
            <br />
            Achuth believes in becoming 1% better every day. His bucket list is
            to build an indie product and impact 1B people by making{" "}
            <b>tools for creators accessible to everyone in the world</b>.
            <br />
            <br />
            When Achuth is not working, he makes pencil art, write poems and
            travel photography.
            <br />
            <br />
            You can find Achuth on{" "}
            <a href="https://achuth.dev/instagram" aria-label="@uiuxdx">
              <b>Instagram</b>
            </a>
            ,{" "}
            <a href="https://achuth.dev/twitter" aria-label="@achuth_hadnoor">
              <b>Twitter</b>
            </a>{" "}
            or{" "}
            <a href="https://achuth.dev/linkedin" aria-label="achuth hadnoor">
              <b>LinkedIn</b>
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;

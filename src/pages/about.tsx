import React from "react";
import Container from "@/components/Container";
import Image from "next/image";

const Home = () => {
  return (
    <Container
      title="About – Achuth Hadnoor"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col sm:flex-row gap-6 mb-20">
        <div className="align-middle sm:justify-center h-[400] w-[400]">
          <Image
            src="/images/achuth.jpg"
            alt="Achuth Hadnoor"
            height={400}
            width={400}
            className="h-[100] w-[180] rounded-xl"
          />
        </div>
        <div>
          <h1 className="my-4 font-semibold text-2xl bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-blue-500 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent">
            Hi! You can call me Achuth.
          </h1>
          <p className="text-sm leading-loose max-w-lg">
            Achuth Hadnoor is a self-taught Designer, Developer, Maker.
            Currently, he works at DBS. he is known for his{" "}
            <b>applications, beautiful designs and the drive to hustle</b>.
            <br />
            Achuth’s proudest achievement is his applications hit{" "}
            <b>#1 twice on producthunt</b>. During the pendamic he created a{" "}
            <b>time-lapse screen recording app</b> that helps{" "}
            <b>1000+ creators</b> to make <b>instant time-lapse</b> of their{" "}
            <b>digital work</b> and share them on platforms like youtube{" "}
            <b>20X faster</b>.
            <br />
            Achuth believes in becoming 1% better every day. His bucket list is
            to build an indie product and impact 1B people by making{" "}
            <b>tools for creators accessible to everyone in the world</b>.
            <br />
            When Achuth is not working, he makes pencil art, write poems and
            travel photography.
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

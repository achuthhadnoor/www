import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import Subscribe from "@/components/Newsletter/subscribe";

export default function Newsletter() {
  return (
    <Container
      // title="Newsletter | A monthly collection of articles, designs and personal development."
      title="Newsletter | Achuth Hadnoor"
    >
      <div className=" mb-10">
        <Image
          alt="Achuth Hadnoor"
          height={300}
          width={300}
          layout="fixed"
          src="/images/achuth.jpg"
          className="rounded-lg filter block absolute dark:grayscale"
        />
      </div>
      <Subscribe />
      <h3 className="text-xl py-2">{`What's inside?`}</h3>
      <p className="text-sm">{`Every issue, I'll share:`}</p>
      <ul className="list-disc text-xs pl-10 pt-2 mb-10 gap-2 flex- flex-col">
        <li>1 UI/UX design tip</li>
        <li>1 productivity tip to help you do more in less time</li>
        <li>1 quote that inspires you</li>
        <li>Learnings on design, solopreneurship, self-development</li>
      </ul>
      <h3 className="text-xl py-2">{`Past Issues`}</h3>
      <p className="text-sm">{`Wish to read the issues before you subscribe then 👇 here are few`}</p>
      <div className="flex flex-col my-4 gap-2 mb-10">
        <div className="font-semibold text-sm">
          Issue 1 --- Wealthy NFT loosers!
        </div>
        <div className="font-semibold text-sm">
          Issue 2 --- Investing in javascript for web 3.0!{" "}
        </div>
      </div>
    </Container>
  );
}

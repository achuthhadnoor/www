import React from "react";
import type { NextPage } from "next";

const Custom404: NextPage = () => (
  <>
    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-semibold leading-relaxed tracking-tight">
          404 - Page Not Found
        </h1>
      </div>
    </section>
  </>
);

export default Custom404;

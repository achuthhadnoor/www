import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <NextSeo title="Home" />
    </>
  );
};

export default Home;

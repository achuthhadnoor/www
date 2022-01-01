import React, { useState, useEffect } from "react";
import Container from "@/components/Container";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <Container>test data</Container>;
};

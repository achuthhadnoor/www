import React from "react";
import Router from "next/router";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;

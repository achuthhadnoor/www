import "./globals.css";
import type { Metadata } from "next";
import { fira } from "./font";
import { Analytics } from "@vercel/analytics/react";
import cl from "classnames";

export const metadata: Metadata = {
  metadataBase: new URL("https://achuth.dev"),
  title: {
    default: "Achuth Hadnoor",
    template: "%s | Achuth Hadnoor",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Achuth Hadnoor",
    description: "Designer, Developer, writer, and creator.",
    url: "https://achuth.dev",
    siteName: "Achuth Hadnoor",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Achuth hadnoor",
    card: "summary_large_image",
  },
  icons: "/favicon.ico",
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cl(fira.className, "bg-neutral-900 text-neutral-50")}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}

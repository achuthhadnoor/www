import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect, Fragment } from "react";
import styles from "styles/mobile-menu.module.css";
import Icon from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather";

const MoreMenu = ({ text, items }: any) => {
  return (
    <>
      <li
        className=" text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
        style={{ transitionDelay: "275ms" }}
      >
        <span className="flex w-auto pb-2 text-gray-400 dark:text-gray-300">
          {text}
        </span>
      </li>
      <>
        {items.map((item: { text: string; href: string }) => {
          return (
            <Fragment key={`text-${item.text}`}>
              <li
                className="border-b border-gray-300 pl-4 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
                style={{ transitionDelay: "275ms" }}
              >
                <Link href="/resources">
                  <a className="flex w-auto pb-2">{item.text}</a>
                </Link>
              </li>
            </Fragment>
          );
        })}
      </>
    </>
  );
};

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "fixed top-14 flex  w-screen flex-col overflow-x-hidden bg-gray-50 dark:bg-gray-900",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "150ms" }}
          >
            <Link href="/about">
              <a className="flex w-auto pb-2">About</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-2">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/collection">
              <a className="flex w-auto pb-2">Resources</a>
            </Link>
          </li>
          {/* <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/faq">
              <a className="flex w-auto pb-2">FAQ</a>
            </Link>
          </li> */}

          {/* <MoreMenu
            items={[
              {
                text: "Design",
                href: "/design",
              },
              {
                text: "Development",
                href: "/development",
              },
              {
                text: "No-code",
                href: "/nocode",
              },
            ]}
            text="Work"
          /> */}
          <MoreMenu
            items={[
              {
                text: "Bookmarks",
                href: "/bookmarks",
              },
              {
                text: "Collection",
                href: "/collection",
              },
              {
                text: "Newsletter",
                href: "/newsletter",
              },
              {
                text: "Contact",
                href: "/contact",
              },
            ]}
            text="More"
          />
          {/* <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "350ms" }}
          >
            <Link href="/uses">
              <a className="flex w-auto pb-2">Uses</a>
            </Link>
          </li> */}
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

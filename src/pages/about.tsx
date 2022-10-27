import Image from "next/image";
import Container from "../layouts/Container";

export default function Home() {
  return (
    <Container>
      <Image
        className="rounded-md"
        height={650}
        width={1080}
        src={"/assets/img/achuth.jpg"}
        alt="Achuth Hadnoor"
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="mt-5 text-2xl">About me</h2>
        <div className="my-5">
          <p className="mt-10 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            👋 Hey, I am a Designer, Developer and maker from India 🇮🇳. In
            short, I love creating and building stuff. ✨ Welcome to my little
            slice of the internet. I hope you find something useful!
          </p>
          <p className="mt-10 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
            Innovative, task-driven professional with 6+ years of experience in
            web design and development across diverse industries. Equipped with
            a record of success in consistently identifying and providing the
            technological needs of companies through ingenious innovation.
            Proficient in developing applications, creating user interfaces,
            writing and testing codes, troubleshooting simple/complex issues,
            and implementing new features based on user feedback.
          </p>
          <p className="mt-10 text-sm leading-loose text-neutral-800 dark:text-neutral-500">
            I am currently working on projects that help creators and designers.
            Most recently I started working on Screenshot editing app for
            Desktop that helps you make beitiful screenshots in seconds.{" "}
          </p>
        </div>
        <hr className="wave my-20" />

        <div className="my-5">
          <h2 className="text-2xl">Work</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            I have an experience as a web developer working with Design systems,
            React ecosystems and AWS cloud.
          </p>
          <div className="my-5 flex flex-col gap-2 space-y-4 text-sm md:space-y-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-blue-600">DBS Bank</span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 md:px-4">Fontend Developer</span>
                <span className="text-xs text-neutral-500">2020 - present</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-blue-600">EPAM Systems</span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 md:px-4">Software Engineer</span>
                <span className="text-xs text-neutral-500">2020 - present</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <span className="text-md text-blue-600">Vistex Asia Pacific</span>
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <span className="py-2 md:px-4">Developer</span>
                <span className="text-xs text-neutral-500">2016 - 2020</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="wave my-20" />
        <div className="my-5">
          <h2 className="text-2xl">Find me online</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            There are many places where we can share and collaborate in the
            internet. These are the few places where I showcase, collaborate and
            sell my products
          </p>
          <div className="spax-y-4 mt-5 flex flex-col gap-4 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.twitter.com/achuth_hadnoor"
            >
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 2.24973C16.5318 2.75634 15.7366 3.14381 14.895 3.39723C14.4433 2.87786 13.843 2.50975 13.1753 2.34267C12.5076 2.1756 11.8046 2.21763 11.1616 2.46307C10.5185 2.70851 9.96633 3.14553 9.57974 3.71502C9.19314 4.2845 8.99077 4.95898 9 5.64723V6.39723C7.68198 6.43141 6.37596 6.13909 5.19826 5.54631C4.02056 4.95354 3.00774 4.07871 2.25 2.99973C2.25 2.99973 -0.75 9.74973 6 12.7497C4.4554 13.7982 2.61537 14.3239 0.75 14.2497C7.5 17.9997 15.75 14.2497 15.75 5.62473C15.7493 5.41582 15.7292 5.20743 15.69 5.00223C16.4555 4.24735 16.9956 3.29426 17.25 2.24973V2.24973Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>Twitter</b> - build in public
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.dribbble.com/achuth_hadnoor"
            >
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5714 15.0674C11.2901 13.4535 10.8214 11.7861 10.1651 10.0652H10.145L10.1249 10.0752C10.0178 10.1154 9.87382 10.1706 9.69301 10.2409C9.51221 10.3112 9.17404 10.4753 8.6785 10.7331C8.18297 10.9909 7.72426 11.2655 7.30239 11.5568C6.88051 11.8481 6.4419 12.2314 5.98654 12.7069C5.53118 13.1823 5.18631 13.6779 4.95194 14.1935L4.80127 14.083C6.03341 15.0875 7.43297 15.5897 8.99993 15.5897C9.88386 15.5897 10.741 15.4156 11.5714 15.0674ZM9.7131 8.97029C9.57248 8.64216 9.39502 8.27051 9.18074 7.85533C7.09815 8.4781 4.8448 8.78948 2.42069 8.78948C2.41399 8.83636 2.41064 8.90667 2.41064 9.00042C2.41064 9.83078 2.55797 10.6226 2.85261 11.376C3.14725 12.1293 3.56243 12.804 4.09815 13.4C4.43297 12.804 4.84647 12.2465 5.33866 11.7275C5.83085 11.2086 6.30797 10.7917 6.77002 10.477C7.23207 10.1623 7.66902 9.89104 8.08085 9.66337C8.49268 9.43569 8.82582 9.27497 9.08029 9.18122L9.45194 9.05064C9.47873 9.04395 9.52225 9.03223 9.58252 9.01549C9.64279 8.99875 9.68632 8.98368 9.7131 8.97029ZM8.63832 6.84082C7.83475 5.41448 7.01779 4.14886 6.18743 3.04395C5.26332 3.47921 4.47984 4.10198 3.83698 4.91225C3.19413 5.72252 2.76556 6.63323 2.55127 7.64439C4.57359 7.64439 6.60261 7.37654 8.63832 6.84082ZM15.5089 10.0451C14.1026 9.64328 12.7332 9.54618 11.4006 9.75377C11.9832 11.3542 12.4118 12.9245 12.6863 14.4647C13.4296 13.9625 14.049 13.328 14.5446 12.5612C15.0401 11.7945 15.3615 10.9558 15.5089 10.0451ZM7.42292 2.60198C7.41623 2.60198 7.40953 2.60533 7.40283 2.61203C7.40953 2.60533 7.41623 2.60198 7.42292 2.60198ZM13.3493 4.05845C12.1104 2.96024 10.6606 2.41113 8.99993 2.41113C8.491 2.41113 7.97203 2.47475 7.44301 2.60198C8.32024 3.74037 9.1439 5.01939 9.91399 6.43904C10.376 6.26493 10.8113 6.06236 11.2198 5.83133C11.6283 5.60031 11.9514 5.39439 12.1891 5.21359C12.4268 5.03279 12.6461 4.84194 12.847 4.64104C13.0479 4.44015 13.1735 4.30455 13.2237 4.23424L13.3493 4.05845ZM15.5892 8.93011C15.5691 7.37654 15.0702 6.00377 14.0926 4.8118L14.0825 4.82185C14.0223 4.9022 13.9586 4.98424 13.8917 5.06794C13.8247 5.15165 13.6791 5.30064 13.4547 5.51493C13.2304 5.72921 12.9927 5.93178 12.7416 6.12263C12.4904 6.31348 12.1556 6.53111 11.7371 6.77553C11.3186 7.01995 10.8783 7.23591 10.4162 7.42341C10.5836 7.77832 10.731 8.0964 10.8582 8.37765C10.8716 8.41113 10.8933 8.46805 10.9235 8.54841C10.9536 8.62877 10.9787 8.68569 10.9988 8.71917C11.2399 8.68569 11.4893 8.66225 11.7471 8.64886C12.005 8.63546 12.251 8.62877 12.4854 8.62877C12.7198 8.62877 12.9508 8.63379 13.1785 8.64384C13.4062 8.65388 13.6205 8.66727 13.8214 8.68401C14.0223 8.70075 14.2114 8.71917 14.3889 8.73926C14.5663 8.75935 14.7271 8.78111 14.871 8.80455C15.015 8.82799 15.1372 8.84808 15.2377 8.86482C15.3381 8.88156 15.4218 8.89663 15.4888 8.91002L15.5892 8.93011ZM16.7142 9.00042C16.7142 10.4 16.3694 11.6907 15.6796 12.8726C14.9899 14.0546 14.0541 14.9904 12.8721 15.6801C11.6902 16.3698 10.3995 16.7147 8.99993 16.7147C7.60038 16.7147 6.30964 16.3698 5.12772 15.6801C3.9458 14.9904 3.00998 14.0546 2.32024 12.8726C1.63051 11.6907 1.28564 10.4 1.28564 9.00042C1.28564 7.60087 1.63051 6.31013 2.32024 5.12821C3.00998 3.94629 3.9458 3.01046 5.12772 2.32073C6.30964 1.631 7.60038 1.28613 8.99993 1.28613C10.3995 1.28613 11.6902 1.631 12.8721 2.32073C14.0541 3.01046 14.9899 3.94629 15.6796 5.12821C16.3694 6.31013 16.7142 7.60087 16.7142 9.00042Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <b>Dribbble</b> - Design
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.github.com/achuthhadnoor"
            >
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.4996V13.5971C12.0281 13.2395 11.9798 12.8799 11.8583 12.5424C11.7367 12.2049 11.5447 11.8972 11.295 11.6396C13.65 11.3771 16.125 10.4846 16.125 6.38959C16.1248 5.34246 15.722 4.33549 15 3.57709C15.3419 2.66097 15.3177 1.64835 14.9325 0.749587C14.9325 0.749587 14.0475 0.487087 12 1.85959C10.281 1.3937 8.46899 1.3937 6.75 1.85959C4.7025 0.487087 3.8175 0.749587 3.8175 0.749587C3.43228 1.64835 3.40811 2.66097 3.75 3.57709C3.0226 4.34111 2.61939 5.35718 2.625 6.41209C2.625 10.4771 5.1 11.3696 7.455 11.6621C7.20825 11.9171 7.01795 12.2211 6.89648 12.5545C6.77502 12.8879 6.72511 13.2431 6.75 13.5971V16.4996M6.75 14.2496C3 15.3746 3 12.3746 1.5 11.9996L6.75 14.2496Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>Github</b> - Showcase my code and collaborate on opensource
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.linked.com/in/achuth_hadnoor"
            >
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6V6Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 6.75H1.5V15.75H4.5V6.75Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>LinkedIn</b> - Professional network
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-neutral-800 hover:text-blue-600 dark:text-neutral-200"
              href="https://www.instagram.com/achuth.hadnoor"
            >
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9998 8.52773C12.0923 9.15191 11.9857 9.78939 11.6951 10.3495C11.4045 10.9096 10.9446 11.3638 10.381 11.6475C9.81736 11.9312 9.17862 12.0299 8.55562 11.9297C7.93262 11.8294 7.3571 11.5353 6.91091 11.0891C6.46472 10.6429 6.17058 10.0674 6.07033 9.44439C5.97008 8.82139 6.06883 8.18265 6.35253 7.61901C6.63622 7.05537 7.09042 6.59553 7.65052 6.30491C8.21062 6.01428 8.8481 5.90767 9.47228 6.00023C10.109 6.09464 10.6984 6.39132 11.1536 6.84646C11.6087 7.30159 11.9054 7.89103 11.9998 8.52773Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.125 4.875H13.1325"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <b>Instagram</b> - Design education
              </span>
            </a>
          </div>
        </div>
        <hr className="wave my-20" />
        <div className="my-5">
          <h2 className="text-2xl">About the site</h2>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            This website contains all the work that is created, curated and
            maintained by Achuth hadnoor. The goal of this website is to have a
            single source of truth of the content that Achuth has on the
            internet.
          </p>
          <p className="mt-2 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
            For queries, suggestion and copy rights please contact.{" "}
            <a className="underline" href="mailto:hey@achuth.dev">
              hey@achuth.dev
            </a>
          </p>
        </div>
        <hr className="wave my-10" />
      </div>
    </Container>
  );
}

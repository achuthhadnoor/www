import Container from "src/layouts/Container";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Container>
      <h1 className="mb-5 text-3xl">
        How to turn side projects into an actual product?
      </h1>
      <div className="flex gap-4 py-4 align-middle">
        <span className="">
          <Image
            alt="Author - Achuth Hadnoor"
            height={36}
            width={36}
            src="/images/achuth.jpg"
            className="rounded-full"
          />
        </span>
        <div className="flex flex-col gap-2 text-sm">
          <span className="flex flex-col gap-2 md:flex-row">
            <span>Achuth Hadnoor </span>{" "}
            <span className="hidden md:inline">·</span>{" "}
            <span> January 28, 2022 </span>
          </span>
          <div className="text-xs text-neutral-400">
            <span>12 min read · </span>
            <span>120 likes</span>
          </div>
          <div className="my-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-neutral-700 px-2 py-1">
              # productivity
            </span>
            <span className="rounded-full bg-neutral-700 px-2 py-1">
              # time
            </span>
          </div>
        </div>
      </div>
      <hr className="wave my-5" />
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="series my-5 flex flex-1 flex-col gap-2 rounded-lg bg-neutral-800 p-4 text-sm">
            <div>SERIES</div>
            <div>Build an macOs menubar app using NextJs and eletronJS</div>
          </div>
          <div>
            <div>
              <Image
                className="rounded-md"
                height={650}
                width={1080}
                src={"/assets/img/achuth.jpg"}
                alt="Achuth Hadnoor"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:max-w-xs">asdas</div>
      </div>
    </Container>
  );
}

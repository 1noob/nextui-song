import { Image, Link } from "@nextui-org/react";
import TypedBios from "@/components/about/typed-bios";
import { GithubIcon, XIcon, EmailIcon } from "@/components/icons";

export const AboutSideBar = () => {
  return (
    <div className={"lg:max-w-[12rem] relative lg:fixed flex gap-4 flex-col p-4"}>
      <div className={"flex justify-center"}>
        <Image
          className={"rounded-full"}
          classNames={{
            wrapper: "w-1/3 lg:w-2/3 border-2 rounded-full border-gray-300",
          }}
          src={"/avatar/song.png"}
        />
      </div>
      <div className={"flex flex-col gap-2"}>
        <p className={"text-center text-xl font-black"}>Zhou SongJie</p>
        <p className={"text-center text-secondary text-xs"}>
          Fullstack Engineer
        </p>
        <div className={"flex flex-row justify-center gap-2"}>
          <Link isExternal href="mailto:song@jackey.love" aria-label="email">
            <EmailIcon className={"text-default-500"} size={18} />
          </Link>
          <Link
            isExternal
            href="https://twitter.com/zhousongjie"
            aria-label="twitter"
          >
            <XIcon className={"text-default-500"} size={18} />
          </Link>
          <Link isExternal href="https://github.com/1noob" aria-label="github">
            <GithubIcon className={"text-default-500"} size={18} />
          </Link>
        </div>
      </div>
      <TypedBios />
    </div>
  );
};

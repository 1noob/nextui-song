import GitHubCalendar from "react-github-calendar";
import { Image } from "@nextui-org/react";
import Greeting from "@/components/greeting";

export default function Home() {
  return (
    <>
      <div className={"w-full flex flex-col justify-start items-center my-6 lg:my-12"}>
        <Greeting className={"text-center"}>
          Hello, folks! Discover my stories and creative ideas.
        </Greeting>
        <div className={"hidden lg:flex"}>
          <div className={"grid grid-cols-5"}>
            <div className={"overflow-hidden w-full grid content-center"}>
              <div className="flex animate-[scy_30s_linear_infinite] w-max">
                <GitHubCalendar
                  username="1noob"
                  blockSize={24}
                  hideColorLegend={true}
                  hideTotalCount={true}
                />
                <GitHubCalendar
                  username="1noob"
                  blockSize={24}
                  hideColorLegend={true}
                  hideTotalCount={true}
                />
              </div>
            </div>
            <div className={"grid col-span-4 content-center"}>
              <Image
                src={
                  "https://git.jackey.love/graph?" +
                  "username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=340"
                }
              />
            </div>
          </div>
        </div>
        <div className={"flex lg:hidden w-full"}>
          <div className={"overflow-hidden w-full"}>
            <div className="flex animate-[scy_60s_linear_infinite] w-max">
              <div className={"content-center grid"}>
                <GitHubCalendar
                  username="1noob"
                  blockSize={24}
                  hideColorLegend={true}
                  hideTotalCount={true}
                />
              </div>
              <Image
                src={
                  "https://github.jackey.love/graph?" +
                  "username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=300"
                }
              />
              <div className={"content-center grid"}>
                <GitHubCalendar
                  username="1noob"
                  blockSize={24}
                  hideColorLegend={true}
                  hideTotalCount={true}
                />
              </div>
              <Image
                src={
                  "https://github.jackey.love/graph?" +
                  "username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=300"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

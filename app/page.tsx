import GitHubCalendar from "react-github-calendar";
import { Card, CardBody, Image, ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className={"grid w-full my-12"}>
        <div className="text-center">
          <h1 className="mb-2 font-bold text-4xl">Hello</h1>
          <h5 className="text-default-500 text-lg">
            There is nothing to writing. All you do is sit down at a typewriter
            and bleed.
          </h5>
        </div>
        <div className={"flex grid lg:grid-cols-4 mt-10"}>
          <div className={"overflow-hidden w-full"}>
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
          <div className={"hidden lg:flex col-span-3"}>
            <Image
              src={
                "https://github-graph.1noob.vercel.app/graph?" +
                "username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=300"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

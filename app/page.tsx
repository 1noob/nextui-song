import GitHubCalendar from "react-github-calendar";
import { Card, CardBody, Image, ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className={"flex grid gap-4 mt-4 mb-12"}>
        <div className={"my-auto overflow-hidden w-full grid"}>
          {/*<div className="hidden sm:flex animate-[scy_30s_linear_infinite] w-max max-h-fit">*/}
          {/*  <div className={"grid max-h-full content-center"}>*/}
          {/*    <GitHubCalendar username="1noob" blockSize={24}/>*/}
          {/*  </div>*/}
          {/*  <Image*/}
          {/*    className={"max-w-[900px]"}*/}
          {/*    src={*/}
          {/*      "https://github-graph.1noob.vercel.app/graph" +*/}
          {/*      "?username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=500"*/}
          {/*    }*/}
          {/*    radius={"none"}*/}
          {/*    shadow={"none"}*/}
          {/*  />*/}
          {/*  <div className={"grid max-h-full content-center"}>*/}
          {/*    <GitHubCalendar username="1noob" blockSize={24}/>*/}
          {/*  </div>*/}
          {/*  <Image*/}
          {/*    className={"max-w-[900px]"}*/}
          {/*    src={*/}
          {/*      "https://github-graph.1noob.vercel.app/graph" +*/}
          {/*      "?username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=500"*/}
          {/*    }*/}
          {/*    radius={"none"}*/}
          {/*    shadow={"none"}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="flex animate-[scy_30s_linear_infinite] w-max content-center">
            <GitHubCalendar username="1noob" blockSize={24} hideColorLegend={true} hideTotalCount={true}/>
            <GitHubCalendar username="1noob" blockSize={24} hideColorLegend={true} hideTotalCount={true}/>
          </div>
        </div>
        <Image
          className={"hidden lg:flex"}
          src={
            "https://github-graph.1noob.vercel.app/graph" +
            "?username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=300"
          }
        />
      </div>
    </>
  );
}

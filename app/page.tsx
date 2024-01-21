import GitHubCalendar from "react-github-calendar";
import { Card, CardBody, Image, ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className={"flex grid gap-4 mt-4 mb-12"}>
        <div className={"my-auto overflow-hidden w-full grid"}>
          <div className="flex animate-[scy_30s_linear_infinite] w-max content-center">
            <GitHubCalendar className={"min-w-[844px]"} username="1noob" hideTotalCount/>
            <Image
              className={"max-w-[380px]"}
              src={
                "https://github-graph.1noob.vercel.app/graph?username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=450"
              }
              radius={"none"}
              shadow={"none"}
            />
            <GitHubCalendar className={"min-w-[844px]"} username="1noob" hideTotalCount/>
            <Image
              className={"max-w-[380px]"}
              src={
                "https://github-graph.1noob.vercel.app/graph?username=1noob&theme=github-compact&hide_border=true&hide_title=true&height=450"
              }
              radius={"none"}
              shadow={"none"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

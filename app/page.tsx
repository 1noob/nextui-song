import GitHubCalendar from "react-github-calendar";
import { Card, CardBody, Image, ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className={"flex grid gap-4 mt-4 mb-12"}>
        <div className={"my-auto overflow-hidden w-full grid"}>
          <div className="flex animate-[scy_30s_linear_infinite] w-max content-center gap-4">
            <GitHubCalendar className={"min-w-[844px]"} username="1noob" blockSize={16}/>
            <Image
              className={"max-w-[810px]"}
              src={
                "https://github-graph.1noob.vercel.app/graph" +
                "?username=1noob&theme=github-compact&hide_border=true&height=300" +
                "&custom_title=Over%20the%20past%20month"
              }
              radius={"none"}
              shadow={"none"}
            />
            <GitHubCalendar className={"min-w-[844px]"} username="1noob" blockSize={16}/>
            <Image
              className={"max-w-[810px]"}
              src={
                "https://github-graph.1noob.vercel.app/graph" +
                "?username=1noob&theme=github-compact&hide_border=true&height=300" +
                "&custom_title=Over%20the%20past%20month"
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

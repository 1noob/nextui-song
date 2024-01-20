"use client";

import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <>
      <div className={"flex justify-start mt-4 mb-12"}>
        <GitHubCalendar username="1noob" hideTotalCount />
      </div>
    </>
  );
}

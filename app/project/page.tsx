import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import data from "@/config/project.json";
import NextLink from "next/link";

export default function Project() {
  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">
          Personal Project Latest Updates
        </h1>
        <h5 className="text-default-500 text-lg">
          All the latest job about me.
        </h5>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {data.project.map((props, idx) => (
          <Card
            isBlurred
            className="p-2 h-full w-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
            key={idx}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{props.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible px-4">
              <Link href={props.url}>
                <Image
                  className={"border dark:brightness-75"}
                  src={props.image}
                />
              </Link>
            </CardBody>
            <CardFooter className={"pt-2 px-4 flex-col items-start"}>
              <p className="text-tiny uppercase font-bold">{props.domain}</p>
              <Link isExternal showAnchorIcon href={props.source}>
                <small>Visit source code on GitHub.</small>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

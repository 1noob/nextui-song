import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import data from "@/config/project.json";

const api = "https://backup15.terasp.net/api/screenshot?resX=1280&resY=900&outFormat=jpg&waitTime=100&isFullPage=false&dismissModals=false&url="

export default function Project() {
  return (
    <div className="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {data.project.map((props, idx) => (
        <Card
          isBlurred
          className="p-2 h-full w-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          key={idx}
        >
          <CardHeader className="flex-col items-start">
            <h4 className="font-bold text-large">{props.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible">
            <Link href={props.url}>
              <Image
                radius={"sm"}
                className={"border-1 dark:border-0 dark:brightness-75 w-full"}
                src={`${api}`+props.url}
                sizes={1000}
              />
            </Link>
          </CardBody>
          <CardFooter className={"flex-col items-start"}>
            <p className="text-tiny uppercase font-bold">{props.domain}</p>
            <Link isExternal showAnchorIcon href={props.source}>
              <small>Visit source code on GitHub.</small>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

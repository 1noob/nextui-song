import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

import data from "@/config/project.json";

interface ProjectProps {
  domain: string;
  title: string;
  url: string;
  source: string;
  image: string;
}

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
        {data.project.map((ProjectProps, idx) => (
          <Card key={idx} className="pt-4 gap-2">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{ProjectProps.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible">
              <Link href={"https://song.jackey.love"}>
                <Image
                  className={"border dark:brightness-90"}
                  src={ProjectProps.image}
                />
              </Link>
            </CardBody>
            <CardFooter className={"pt-2 px-4 flex-col items-start"}>
              <p className="text-tiny uppercase font-bold">
                {ProjectProps.domain}
              </p>
              <Link isExternal showAnchorIcon href={ProjectProps.source}>
                <small>Visit source code on GitHub.</small>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

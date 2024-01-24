import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

export default function Blog() {
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
        <Card className="pt-4 gap-2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">song.jackey.love</p>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/1noob/song.jackey.love"
            >
              <small>Visit source code on GitHub.</small>
            </Link>
            <h4 className="font-bold text-large">Personal Website</h4>
          </CardHeader>
          <CardBody className="overflow-visible">
            <Link href={"https://song.jackey.love"}>
              <Image
                className={"border"}
                src={
                  "https://screenshot.jackey.love?url=https://song.jackey.love"
                }
              />
            </Link>
          </CardBody>
        </Card>
        <Card className="pt-4 gap-2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              genshin.1noob.vercel.app
            </p>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/1noob/www-ginshin"
            >
              <small>Visit source code on GitHub.</small>
            </Link>
            <h4 className="font-bold text-large">Genshin Impact Launch!</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-3">
            <Link href={"https://genshin.1noob.vercel.app"}>
              <Image
                className={"border"}
                src={
                  "https://screenshot.jackey.love?url=https://genshin.1noob.vercel.app"
                }
              />
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

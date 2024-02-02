import Greeting from "@/components/greeting";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="grid my-6 lg:my-12">
        <Greeting>
          SONG/Project
        </Greeting>
        {children}
      </div>
    </>
  );
}

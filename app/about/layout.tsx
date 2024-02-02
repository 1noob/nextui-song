import { AboutSideBar } from "@/components/about/sidebar";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 justify-center overflow-visible relative z-10 lg:block lg:col-span-2 lg:p-4">
          <AboutSideBar />
        </div>
          {children}
      </div>
    </>
  );
}

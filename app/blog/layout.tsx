import Greeting from "@/components/greeting";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <div className="grid my-12 w-full">{children}</div>
    </>
  );
}

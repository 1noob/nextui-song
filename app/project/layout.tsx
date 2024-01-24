interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="grid my-12">
        {children}
      </div>
    </>
  );
}

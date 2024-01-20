interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-12 my-12">
        <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2" />
        {children}
      </div>
    </>
  );
}

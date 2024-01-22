interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function DocLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2" />
        <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16">
          {children}
        </div>
      </div>
    </>
  );
}

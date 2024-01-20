interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <div className="grid my-12">
        {children}
      </div>
    </>
  );
}

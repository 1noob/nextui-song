interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        {children}
      </main>
    </>
  );
}

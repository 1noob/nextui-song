"use client";

import manifest from "@/config/routes.json";
import { DocsSidebar } from "@/components/docs/sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 p-2.5">
          <DocsSidebar routes={manifest.routes} />
        </div>
        {children}
      </div>
    </>
  );
}

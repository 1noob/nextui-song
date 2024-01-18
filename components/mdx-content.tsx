"use client";

import type { MDXComponents as MDXComponentsType } from "mdx/types";

import { useMDXComponent } from "next-contentlayer/hooks";

import { MDXComponents } from "./mdx-components";
import React from "react";

interface MDXContentProps {
  code: string;
}

const MDXContent: React.FC<unknown> = ({ code }: MDXContentProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={MDXComponents as MDXComponentsType} />
    </div>
  );
};

export default MDXContent;

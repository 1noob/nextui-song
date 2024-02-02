import clsx from "clsx";

interface GreetingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Greeting({ children, className }: GreetingProps) {
  const style = clsx(
    "bg-gradient-to-r from-blue-800 to-primary dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary",
    "mb-4 lg:mb-8 bg-clip-text text-4xl font-black leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]",
    className
  );

  return <div className={style}>{children}</div>;
}

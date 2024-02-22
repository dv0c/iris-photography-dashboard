import { cn } from "@/lib/utils";
import { FC } from "react";

interface PageProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Page: FC<PageProps> = ({ children, className, title }) => {
  return (
    <div className={cn(className, "")}>
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </div>
  );
};

export default Page;

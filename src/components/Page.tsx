import { cn } from "@/lib/utils";
import { FC } from "react";

interface PageProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  description?: string;
}

const Page: FC<PageProps> = ({
  action,
  children,
  description,
  className,
  title,
}) => {
  return (
    <section className={cn(className, "w-full")}>
      <div className="flex items-center mb-10 justify-between">
        <div className="flex-col flex gap-2">
          {title && <h1 className="md:text-4xl font-bold">{title}</h1>}
          {description && <p className="text-gray-500">{description}</p>}
        </div>
        {action}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Page;

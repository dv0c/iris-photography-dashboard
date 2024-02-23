"use client";
import { FC, useEffect } from "react";
import { SidebarData } from "@/lib/data";
import { Button } from "./ui/button";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const segment = useSelectedLayoutSegments();
  useEffect(() => {}, [segment]);

  return (
    <div className="flex px-5 min-w-[250px] gap-3 flex-col">
      {SidebarData.map((item, _$) => (
        <Link className="w-full" key={_$} href={item.href}>
          <Button
            className={cn(
              "justify-start w-full items-start",
              "/dashboard/" + segment === item.href ? "bg-gray-100" : "",
              segment.length < 1 && item.href === "/" ? "bg-gray-100" : ""
            )}
            variant={"ghost"}
          >
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children?: React.ReactNode;
}

const AuthLayout: FC<layoutProps> = async ({ children }) => {
  const session = await getAuthSession();
  if (session?.user.id) {
    return notFound();
  }
  return <div className="bg-gray-300">{children}</div>;
};

export default AuthLayout;

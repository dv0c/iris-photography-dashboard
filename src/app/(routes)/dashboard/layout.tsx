import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { FC } from "react";

interface layoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: FC<layoutProps> = async ({ children }) => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    return redirect("/auth");
  }
  return (
    <>
    <Header />
    <div className="flex gap-5 my-5 mx-auto max-w-7xl">
      <Sidebar />
      {children}
    </div>
    </>
  );
};

export default DashboardLayout;

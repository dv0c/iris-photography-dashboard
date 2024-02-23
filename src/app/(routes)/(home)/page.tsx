import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getAuthSession();
  if (!session?.user.id) {
    return redirect("/auth");
  }
  return redirect("/dashboard");
}

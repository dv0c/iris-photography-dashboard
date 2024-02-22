import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iris Photograpy Team | Dashboard",
  description: "Iris Photography Team Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getAuthSession();
  if (!session?.user.id) {
    return redirect("/auth");
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

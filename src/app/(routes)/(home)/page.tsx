import Page from "@/components/Page";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex gap-5 mx-auto max-w-5xl">
      <Sidebar />
      <Page>a</Page>
    </main>
  );
}

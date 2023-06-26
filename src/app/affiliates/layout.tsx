import { Header } from "@/components/Header/Dark";
import { SearchSection } from "@/components/Sections/About/SearchSection";
import { Categories } from "@/components/Sections/Categories";
import { DownloadESIM } from "@/components/Sections/DownloadESIM";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <Categories />
      <SearchSection />
      <DownloadESIM />
    </section>
  );
}

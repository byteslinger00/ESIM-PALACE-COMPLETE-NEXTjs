import { Header } from "@/components/Header/Dark";
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
      <DownloadESIM />
    </section>
  );
}
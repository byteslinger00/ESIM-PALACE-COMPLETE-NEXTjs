import { Header } from "@/components/Header/Dark";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <Header />
      {children}
    </section>
  );
}

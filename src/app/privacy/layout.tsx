import { Header } from "@/components/Header/Dark";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="min-h-screen">
      <Header />
      {children}
    </body>
  );
}

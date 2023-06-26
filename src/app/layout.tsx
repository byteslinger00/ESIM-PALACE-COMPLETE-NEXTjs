'use client'
import "./globals.css";
import { Footer } from "@/components/elements/common/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <head>
        
      </head>
      <body className="min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
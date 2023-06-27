'use client'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "@/components/elements/common/Footer";
import { ToastContainer } from 'react-toastify';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <html lang="en">
      <head>
        
      </head>
      <body className="min-h-screen">
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
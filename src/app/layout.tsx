"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "@/components/elements/common/Footer";
import { ToastContainer } from "react-toastify";
import useParticipantStore from "@/store/use-participant";
import { SideBar } from "@/components/elements/SideBar";
import { NextAuthProvider } from "./providers";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { is_sidebar } = useParticipantStore((state) => state);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/dark-logo.svg" />
      </head>
      <body
        className="min-h-screen"
        style={is_sidebar ? { overflow: "hidden" } : { overflow: "auto" }}
      >
        {/* <NextAuthProvider> */}
          <ToastContainer hideProgressBar />
          {children}
          <Footer />
          {is_sidebar ? <SideBar /> : ""}
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
};

export default Layout;

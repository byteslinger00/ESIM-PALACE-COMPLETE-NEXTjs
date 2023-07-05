"use client";

import useParticipantStore from "@/store/use-participant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";
interface props {
  href: string;
  title: string;
  icon: ReactNode;
}

export const SideBarItem: React.FC<props> = ({ href, title, icon }) => {
  const { setLogged, showSideBar } = useParticipantStore((state) => state);
  const router = useRouter();
  const clickSignOut = async () => {
    showSideBar(false);
    signOut();
    deleteCookie('user_info')
    setLogged(false);
  };
  if (href !== "#")
    return (
      <Link
        href={href}
        className="py-2 px-4 hover:bg-gray-100 rounded-md flex flex-row gap-2"
        onClick={() => showSideBar(false)}
      >
        {icon}
        {title}
      </Link>
    );
  else
    return (
      <div
        className="py-2 px-4 hover:bg-gray-100 rounded-md flex flex-row gap-2 cursor-pointer"
        onClick={clickSignOut}
      >
        {icon}
        {title}
      </div>
    );
};

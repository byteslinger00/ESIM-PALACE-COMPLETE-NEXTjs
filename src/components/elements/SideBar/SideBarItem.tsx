"use client";

import useParticipantStore from "@/store/use-participant";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";
import { usePathname } from "next/navigation";
interface props {
  href: string;
  title: string;
  icon: ReactNode;
  hidden_pc?: boolean;
}

export const SideBarItem: React.FC<props> = ({ href, title, icon, hidden_pc }) => {
  const { setLogged, showSideBar } = useParticipantStore((state) => state);
  const clickSignOut = async () => {
    showSideBar(false);
    signOut();
    deleteCookie('user_info')
    setLogged(false);
  };
  const pathName = usePathname();
  const [is_enabled, setEnable] = useState(false);

  useEffect(() => {
    const current_path = "/" + pathName.split("/")[1];
    if (href === current_path) setEnable(true);
  }, [href, pathName]);
  
  if (href !== "#")
    return (
      <Link
        href={href}
        className={`py-2 px-4 hover:bg-gray-100 ${is_enabled?'bg-[#FFECBE]':''} rounded-md flex flex-row gap-2 ${hidden_pc?'lg:hidden':''}`}
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

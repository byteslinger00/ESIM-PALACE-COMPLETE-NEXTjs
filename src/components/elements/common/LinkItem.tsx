"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface props {
  href: string;
  is_dark: boolean;
  title: string;
}

export const LinkItem: React.FC<props> = ({ href, is_dark, title }) => {
  const pathName = usePathname();
  const [is_enabled, setEnable] = useState(false);
  useEffect(() => {
    const current_path = "/" + pathName.split("/")[1];
    if (href === current_path) setEnable(true);
  }, [href, pathName]);
  return (
    <Link
      href={href}
      className={`font-montserrat ${
        is_dark ? "text-dark-solid" : "text-white"
      } text-[16px] font-semibold hover:text-primary-solid ${
        is_enabled ? "text-primary-solid" : ""
      }`}
    >
      {title}
    </Link>
  );
};

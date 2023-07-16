import { LinkItem } from "@/components/elements/common/LinkItem";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="my-auto flex flex-row 2xl:gap-[35px] gap-5 grow mi-high:ml-[130px] mx-high:ml-[20px] text-center max-lg:hidden">
      <LinkItem href="/" title="Home" is_dark={false}/>
      <LinkItem href="/about" title="About us" is_dark={false}/>
      <LinkItem href="/packages" title="Packages" is_dark={false}/>
      <LinkItem href="/support" title="Support" is_dark={false}/>
      <LinkItem href="/affiliates" title="Affiliates" is_dark={false}/>
      <LinkItem href="/contact" title="Contact us" is_dark={false}/>
    </div>
  );
};

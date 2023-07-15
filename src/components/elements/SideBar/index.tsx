import useParticipantStore from "@/store/use-participant";
import Image from "next/image";
import { SideBarItem } from "./SideBarItem";
import { RiUserSettingsLine, RiHomeOfficeLine, RiUserAddLine } from "react-icons/ri";
import { LuPackageOpen, LuHelpCircle } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { TbAffiliate, TbLogout2, TbLogin } from "react-icons/tb";
import { GrContact } from "react-icons/gr";

export const SideBar = () => {
  const { is_logged, is_sidebar, showSideBar } = useParticipantStore(
    (state) => state
  );
  return (
    <div className="">
      <div
        className=" z-[900] fixed top-0 left-0 w-full h-[100vh] bg-[#00000040]"
        onClick={() => showSideBar(false)}
      ></div>
      <div
        className={`z-[1000] fixed top-0 right-0 flex flex-col gap-2 w-[320px] h-[100vh] font-montserrat bg-white text-[#081B27] rounded-l-[16px] p-4 ${
          is_sidebar ? "sidebar-show" : ""
        }`}
      >
        <div>
          <Image
            src="/assets/dark-logo.svg"
            width={80}
            height={60}
            alt="logo"
            className="max-w-[80px] mx-auto"
          />
        </div>
        {is_logged ? (
          <SideBarItem
            href="/profile"
            title="Your Profile"
            icon={<RiUserSettingsLine size={18} className="my-auto" />}
          />
        ) : (
          ""
        )}
        <hr />
        <SideBarItem
          href="/"
          title="Home"
          icon={<RiHomeOfficeLine size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <SideBarItem
          href="/packages"
          title="Packages"
          icon={<LuPackageOpen size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <hr className="lg:hidden"/>
        <SideBarItem
          href="/about"
          title="About us"
          icon={<LuHelpCircle size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <SideBarItem
          href="/support"
          title="Support"
          icon={<MdSupportAgent size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <SideBarItem
          href="/affiliates"
          title="Affiliates"
          icon={<TbAffiliate size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <SideBarItem
          href="/contact"
          title="Contact us"
          icon={<GrContact size={18} className="my-auto" />}
          hidden_pc={true}
        />
        <hr className="lg:hidden"/>
        {is_logged ? (
          <SideBarItem
            href="#"
            title="Sign Out"
            icon={<TbLogout2 size={18} className="my-auto" />}
          />
        ) : (
          ""
        )}
        {!is_logged ? (
          <SideBarItem
            href="/signup"
            title="Sign Up"
            icon={<RiUserAddLine size={18} className="my-auto" />}
          />
        ) : (
          ""
        )}
        {!is_logged ? (
          <SideBarItem
            href="/login"
            title="Login"
            icon={<TbLogin size={18} className="my-auto" />}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

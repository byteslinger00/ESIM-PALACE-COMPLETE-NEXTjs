import useParticipantStore from "@/store/use-participant"
import Link from 'next/link'
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {
    const { is_sidebar, showSideBar } = useParticipantStore((state) => state);
    //  transition: transform 750ms ease-in-out 0s;
    return (
        <div className="">
            <div className=" z-[900] fixed top-0 left-0 w-full h-[100vh] bg-[#00000040]" onClick={() => showSideBar(false)}></div>
            <div className={`z-[1000] fixed top-0 right-0 flex flex-col gap-2 w-[320px] h-[100vh] font-montserrat bg-white rounded-l-[16px] p-4 ${is_sidebar?'sidebar-show':''}`} >
               <div>
               </div>
               <hr/>
               <SideBarItem href="/profile" title="Your Profile"/>
               <hr/>
               <SideBarItem href="/" title="Home"/>
               <SideBarItem href="/packages" title="Packages"/>
               <hr />
               <SideBarItem href="/about" title="About us"/>
               <SideBarItem href="/support" title="Support"/>
               <SideBarItem href="/affiliates" title="Affiliates"/>
               <SideBarItem href="/contact" title="Contact us"/>
               <hr />
               <SideBarItem href="/" title="Sign Out"/>
            </div>
        </div>
    )
}
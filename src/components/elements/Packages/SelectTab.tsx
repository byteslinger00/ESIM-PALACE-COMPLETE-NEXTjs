"use client"
import { useEffect, useState } from "react";
import { TabItem } from "./TabItem";

interface props {
    setRegion: React.Dispatch<React.SetStateAction<string>>;
    selectedRegion: string;
}

export const SelectTab: React.FC<props> = ({ setRegion, selectedRegion }) => {
    const [index, setIndex] = useState(2);
    return (
        <div className="grid grid-cols-6 border-b-[1px] border-[#F2B21B70] lg:mx-[100px] font-montserrat font-semibold max-md:hidden">
            <TabItem title="Europe" region="Europe" selected_region={selectedRegion} set_region={setRegion} />
            <TabItem title="North America" region="North America" selected_region={selectedRegion} set_region={setRegion} />
            <TabItem title="South America" region="South America" selected_region={selectedRegion} set_region={setRegion} />
            <TabItem title="Asia" region="Asia" selected_region={selectedRegion} set_region={setRegion} />
            <TabItem title="Middle East" region="Middle East" selected_region={selectedRegion} set_region={setRegion} />
            <TabItem title="Africa" region="Africa" selected_region={selectedRegion} set_region={setRegion} />
        </div>
    )
}
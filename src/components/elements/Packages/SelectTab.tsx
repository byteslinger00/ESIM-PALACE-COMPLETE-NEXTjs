"use client"
import { useEffect, useState } from "react";
import { TabItem } from "./TabItem";

export const SelectTab = () => {
    const [index, setIndex] = useState(2);
    useEffect(()=>{console.log(index)},[index])
    return(
        <div className="grid grid-cols-6 border-b-[1px] border-[#F2B21B70] lg:mx-[100px] font-montserrat font-semibold max-md:hidden">
            <TabItem title="Europe" index={0} selected_index={index} set_index={setIndex}/>
            <TabItem title="North America" index={1} selected_index={index} set_index={setIndex}/>
            <TabItem title="South America" index={2} selected_index={index} set_index={setIndex}/>
            <TabItem title="Asia" index={3} selected_index={index} set_index={setIndex}/>
            <TabItem title="Middle East" index={4} selected_index={index} set_index={setIndex}/>
            <TabItem title="Africa" index={5} selected_index={index} set_index={setIndex}/>
        </div>
    )
}
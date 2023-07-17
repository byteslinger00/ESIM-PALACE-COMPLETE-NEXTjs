'use client'
import { DropDown } from "@/components/elements/Support/DropDown";
import { Search } from "@/components/elements/Support/Search";
import { Option } from "@/components/elements/Support/SideOption";
import { support } from "@/utils/page-description";
import { useState } from "react";

export const Section3 = () => {
  const [selected_index ,setIndex] = useState(0);
  const [serach_text, setText] = useState('');
  const onClick = (index:number) => {
    setIndex(index);
  }
  const selectHandler = (e:any) => {
    setIndex(Number(e.target.value));
  }
  const searchHandler = (value: string) => {
    setText(value);
  }
  return (
    <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[76px] bg-white flex flex-row gap-15 text-dark-solid text-center">
      <div className="flex flex-row lg:gap-[60px] gap-[20px] ">
        <div className="min-w-[350px] rounded-[14px] bg-[#EBF6FF] px-4 py-[50px] flex flex-col gap-2 max-md:hidden">
          <Option src="Shoppingbag" title="Installation" index={0} selected_index={selected_index} onClick={onClick}/>
          <Option src="Configuration" title="Troubleshooting" index={1} selected_index={selected_index} onClick={onClick}/>
          <Option src="Puzzle" title="Support" index={2} selected_index={selected_index} onClick={onClick}/>
          <Option src="Language" title="General" index={3} selected_index={selected_index} onClick={onClick}/>
          <Option src="Esim" title="About Esims" index={4} selected_index={selected_index} onClick={onClick}/>
        </div>
        <div className="grow flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-5">
            <select className="px-4 rounded-lg border-[#EBF6FF] border-[1px] grow h-[50px] md:hidden" onChange={selectHandler}>
              <option value={0}>Installation</option>
              <option value={1}>Troubleshooting</option>
              <option value={2}>Support</option>
              <option value={3}>General</option>
              <option value={4}>About Esims</option>
            </select>
            <Search onSearch={searchHandler}/>
          </div>
          {support.titles[selected_index].map((item, index) => item.toLowerCase().indexOf(serach_text) !== -1 ? (
            <DropDown
              key={"installation" + index}
              title={item}
              description={support.descriptions[selected_index][index]}
              visible={true}
            />
          ) : <></>)}
        </div>
      </div>
    </section>
  );
};

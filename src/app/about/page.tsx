'use client'
import { SearchSection } from "@/components/Sections/About/SearchSection";
import { Section3 } from "@/components/Sections/About/Section3";
import { TableSection } from "@/components/Sections/About/TableSection";
import { Categories } from "@/components/Sections/Categories";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { about } from "@/utils/page-description";
import { useState } from "react";

export default function Page() {
  const [on_search, setSearch] = useState(false);
  const [searchValue, setValue] = useState('');
  const handleSearch = (searchValue: string) => {
    setValue(searchValue);
    setSearch(true);
  }
  return (
    <main className="mt-[100px] relative">
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-about-us-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={about.SectionHeader0} description={about.SectionDescription0} handlesearch={handleSearch}/>
      <Section2 heading={about.SectionHeader1} description={about.SectionDescription1} on_search={on_search} searchValue={searchValue}/>
      <Section3 />
      <TableSection />
      <Categories />
      <SearchSection handleSearch={handleSearch}/>
    </main>
  );
}

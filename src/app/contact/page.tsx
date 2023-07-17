'use client'
import { Section3 } from "@/components/Sections/Contact/Section3";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { contact } from "@/utils/page-description";
import { Section4 } from "@/components/Sections/Contact/Section4";
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
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-contact-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={contact.SectionHeader0} description={contact.SectionDescription0} handlesearch={handleSearch}/>
      <Section2 heading={contact.SectionHeader1} description={contact.SectionDescription1} only_description={true} on_search={on_search} searchValue={searchValue}/>
      <Section3 />
      <Section4 />
    </main>
  );
}

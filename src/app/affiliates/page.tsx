import { SearchSection } from "@/components/Sections/About/SearchSection";
import { Section3 } from "@/components/Sections/About/Section3";
import { TableSection } from "@/components/Sections/About/TableSection";
import { Footer } from "@/components/elements/common/Footer";
import { Categories } from "@/components/Sections/Categories";
import { DownloadESIM } from "@/components/Sections/DownloadESIM";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { about } from "@/utils/page-description";

export default function Page() {
  return (
    <main className="mt-[100px] relative">
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-affiliates-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={about.SectionHeader0} description={about.SectionDescription0} />
      <Section2 heading={about.SectionHeader1} description={about.SectionDescription1} />
      <Section3 />
      <TableSection />
    </main>
  );
}

import { TableSection } from "@/components/Sections/About/TableSection";
import { Section3 } from "@/components/Sections/Contact/Section3";
import { Footer } from "@/components/elements/common/Footer";
import { DownloadESIM } from "@/components/Sections/DownloadESIM";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { contact } from "@/utils/page-description";
import { Section4 } from "@/components/Sections/Contact/Section4";

export default function Page() {
  return (
    <main className="mt-[100px] relative">
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-contact-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={contact.SectionHeader0} description={contact.SectionDescription0} />
      <Section2 heading={contact.SectionHeader1} description={contact.SectionDescription1} only_description={true}/>
      <Section3 />
      <Section4 />
    </main>
  );
}

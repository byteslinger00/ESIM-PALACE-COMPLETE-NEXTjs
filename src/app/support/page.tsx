import { Footer } from "@/components/elements/common/Footer";
import { DownloadESIM } from "@/components/Sections/DownloadESIM";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { Section3 } from "@/components/Sections/Support/Section2";
import { support } from "@/utils/page-description";

export default function Page() {
  return (
    <main className="mt-[100px] relative">
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-support-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={support.SectionHeader0} description={support.SectionDescription0} />
      <Section2 heading={support.SectionHeader1} description={support.SectionDescription1} only_description={true} />
      <Section3 />
    </main>
  );
}

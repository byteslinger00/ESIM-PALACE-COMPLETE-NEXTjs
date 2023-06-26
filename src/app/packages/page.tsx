
import { Footer } from "@/components/elements/common/Footer";
import { Categories } from "@/components/Sections/Categories";
import { DownloadESIM } from "@/components/Sections/DownloadESIM";
import { Section3 } from "@/components/Sections/Packages/Section3";
import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { packages } from "@/utils/page-description";

export default function Page() {
  return (
    <main className="mt-[100px] relative">
      <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-packages-background ">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
      </div>
      <Section1 heading={packages.SectionHeader0} description={packages.SectionDescription0} />
      <div className="relative">
        <Section2 heading={packages.SectionHeader1} description={packages.SectionDescription1} only_description={true} />
        <Section3 />
        <Categories />
      </div>
    </main>
  );
}

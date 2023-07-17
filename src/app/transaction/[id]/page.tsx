import { Section1 } from "@/components/Sections/Section1";
import { Section2 } from "@/components/Sections/Section2";
import { Section3 } from "@/components/Sections/Transaction/Section3";
import { transaction } from "@/utils/page-description";

export default function Page() {
    return (
        <main className="mt-[100px] relative">
            <div className="absolute z-[-10] w-full h-[800px] bg-cover bg-center bg-transaction-background ">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081B27]"></div>
            </div>
            <Section1 heading={transaction.SectionHeader0} description={transaction.SectionDescription0} hide={true}/>
            <Section2 heading={transaction.SectionHeader1} description={transaction.SectionDescription1} only_description={true} />
            <Section3 />
        </main>
    );
}

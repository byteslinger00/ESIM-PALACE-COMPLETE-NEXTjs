import { DropDown } from "@/components/elements/Support/DropDown"
import { Search } from "@/components/elements/Support/Search"
import { Option } from "@/components/elements/Support/SideOption"
import { support } from "@/utils/page-description"

export const Section3 = () => {
    return (
        <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[76px] bg-white flex flex-row gap-15 text-dark-solid text-center">
            <div className="flex flex-row lg:gap-[60px] gap-[20px] ">
                <div className="min-w-[350px] rounded-[14px] bg-[#EBF6FF] px-4 py-[50px] flex flex-col gap-2 max-md:hidden">
                    <Option src="/assets/Support Page/Icons/SVG Icon/Shopping bag.svg" title="eSim selection and purchase" />
                    <Option src="/assets/Support Page/Icons/SVG Icon/Configuration.svg" title="Configuring your eSIM" />
                    <Option src="/assets/Support Page/Icons/SVG Icon/Puzzle.svg" title="Incompatibility" />
                    <Option src="/assets/Support Page/Icons/SVG Icon/Language.svg" title="Defining terms" />
                    <Option src="/assets/Support Page/Icons/SVG Icon/Esim.svg" title="By using an eSIM" />
                    <Option src="/assets/Support Page/Icons/SVG Icon/Button.svg" title="Troubleshooting" />
                </div>
                <div className="grow flex flex-col gap-4">
                    <div className="flex flex-row gap-5">
                        <select className="px-4 rounded-lg border-[#EBF6FF] border-[1px] grow h-[50px] md:hidden">
                            <option>eSim selection and purchase</option>
                            <option>Configuring your eSIM</option>
                            <option>Incompatibility</option>
                            <option>Defining terms</option>
                            <option>By using an eSIM</option>
                            <option>Troubleshooting</option>
                        </select>
                        <Search />
                    </div>

                    <DropDown title={support.title0} description={support.description0} visible={false} />
                    <DropDown title={support.title0} description={support.description0} visible={true} />
                    <DropDown title={support.title0} description={support.description0} visible={false} />
                    <DropDown title={support.title0} description={support.description0} visible={false} />
                    <DropDown title={support.title0} description={support.description0} visible={false} />
                </div>
            </div>
        </section>
    )
}
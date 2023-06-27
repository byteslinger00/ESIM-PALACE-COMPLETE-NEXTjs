import Image from "next/image"


export const DetailCard = () => {
    return (
        <div className="bg-blue rounded-[20px] text-left text-white px-[30px] py-[30px] font-montserrat flex flex-col gap-4">
            <div className="flex flex-row">
                <p className="md:text-[23px] text-[18px] font-bold leading-7 grow">China</p>
                <Image src="/assets/Homepage/Icons/SVG Icon/Ellipse 9.svg" width={38} height={38} alt="country-logo" className=""/>
            </div>
            <hr className="opacity-20"/>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Internet.svg' width={24} height={24} alt="internet"/>
                    <p className="md:text-[16px] text-[14px] leading-5 my-auto font-medium">Data</p>
                </div>
                <div className="grow"></div>
                <p className="font-bold leading-6 md:text-[19px] text-[16px]">1 GB</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Calendar.svg' width={24} height={24} alt="internet"/>
                    <p className="md:text-[16px] text-[14px] leading-5 my-auto font-medium">Validity</p>
                </div>
                <div className="grow"></div>
                <p className="font-bold leading-6 md:text-[19px] text-[16px]">7 Days</p>
            </div>
            <div className="w-full grid grid-cols-3">
                <div className="flex flex-row gap-[6px]">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check"/>
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">Data Only</p>
                </div>
                <div className="flex flex-row gap-[6px]">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check"/>
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">No Contracts</p>
                </div>
                <div className="flex flex-row gap-[6px]">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check"/>
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">No SIM Cards</p>
                </div>
            </div>
            <button className="bg-white text-black w-full mt-7 py-4 px-6 text-center font-semibold text-[16px] leading-5 rounded-lg">US $5.00 - Buy Now</button>
        </div>
    )
}
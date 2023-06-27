import Image from "next/image"
import { FlagIcon, FlagIconCode } from 'react-flag-kit';

interface props {
    country_name: string;
    country_code: string;
    data: string;
    validity: number;
    plan: string;
    price: string;
    currency: string;
}

export const DetailCard: React.FC<props> = ({ country_code, country_name, data, validity, plan, currency, price }) => {
    return (
        <div className="bg-blue rounded-[20px] text-left text-white px-[30px] py-[30px] font-montserrat flex flex-col gap-4">
            <div className="flex flex-row">
                <p className="md:text-[23px] text-[18px] font-bold leading-7 grow">{country_name}</p>
                <div className="overflow-hidden w-[38px] h-[38px] rounded-full border-white border-[1px]">
                <FlagIcon code={country_code as FlagIconCode} className="!max-w-[100px] w-[50px] !mx-[-6px]" />
                </div>
            </div>
            <hr className="opacity-20" />
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Internet.svg' width={24} height={24} alt="internet" />
                    <p className="md:text-[16px] text-[14px] leading-5 my-auto font-medium">Data</p>
                </div>
                <div className="grow"></div>
                <p className="font-bold leading-6 md:text-[19px] text-[16px]">{data} GB</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Calendar.svg' width={24} height={24} alt="internet" />
                    <p className="md:text-[16px] text-[14px] leading-5 my-auto font-medium">Validity</p>
                </div>
                <div className="grow"></div>
                <p className="font-bold leading-6 md:text-[19px] text-[16px]">{validity} Days</p>
            </div>
            <div className="w-full grid grid-cols-3">
                <div className="flex flex-row gap-[6px]">
                    {plan === 'Data Only' ? <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check" /> : ''}
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">Data Only</p>
                </div>
                <div className="flex flex-row gap-[6px]">
                    {plan === 'No Contracts' ? <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check" /> : ''}
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">No Contracts</p>
                </div>
                <div className="flex flex-row gap-[6px]">
                    {plan === 'No SIM Cards' ? <Image src='/assets/Homepage/Icons/SVG Icon/Group.svg' width={13} height={10} alt="check" /> : ''}
                    <p className="md:text-[13px] text-[10px] font-medium leading-4">No SIM Cards</p>
                </div>
            </div>
            <button className="bg-white text-black w-full mt-7 py-4 px-6 text-center font-semibold text-[16px] leading-5 rounded-lg">US {currency}{price} - Buy Now</button>
        </div>
    )
}
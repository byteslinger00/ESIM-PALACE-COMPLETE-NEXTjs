'use client'
import Image from 'next/image'

interface props {
    title: string;
    description: string;
    visible: boolean;
}

export const DropDown: React.FC<props> = ({ title, description, visible }) => {
    return (
        <div className=" p-6 xl:text-[20px] text-[14px] gap-6 bg-[#EBF6FF] rounded-[14px] w-full flex flex-col text-left">
            <div className='flex flex-row'>
                <h6 className="font-montserratbold grow">{title}</h6>
                <Image src="/assets/Support page/Icons/SVG Icon/Arrow down sign to navigate.svg" width={24} height={24} alt="Arrow Down" className='cursor-pointer'/>
            </div>
            {visible ? <hr className='border-[#AAD9FF]' /> : ''}
            {visible ? <p className="font-montserrat">{description}</p> : ""}
        </div>
    )
}
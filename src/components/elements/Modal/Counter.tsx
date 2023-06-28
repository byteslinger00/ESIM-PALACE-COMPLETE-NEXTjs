'use client'
import Image from 'next/image'
import { useState } from 'react'

export const Counter = () => {
    const [value, setValue] = useState(1);

    const clickMinus = () => {
        setValue(value === 1 ? value : value - 1);
    }

    const clickPlus = () => {
        setValue(value + 1);
    }

    return (
        <div className="w-[140px] h-[48px] px-[17px] py-[14px] flex flex-row bg-[#FFF8E7] border-[#F2B21B] rounded-lg">
            <Image src="/assets/Packages page/Icons/Minus.svg" width={20} height={20} alt="counter-minus" className='cursor-pointer' onClick={() => clickMinus()} />
            <p className='font-montserrat text-center grow'>{value}</p>
            <Image src="/assets/Packages page/Icons/Plus.svg" width={20} height={20} alt="counter-plus" className='cursor-pointer' onClick={() => clickPlus()} />
        </div>
    )
}
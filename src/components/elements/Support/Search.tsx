'use client'
import Image from 'next/image'
import { useState } from 'react';
interface props {
    onSearch:any;
}
export const Search:React.FC<props> = ({onSearch}) => {
    const [text, setText] = useState('');
    return (
        <div className="md:w-full mx-auto gap-10 flex flex-row rounded-lg px-3 py-2 bg-[#FFF8E7] border-[#F2B21B] border-[1px] xl:mb-8 mb-2">
            <input
                type='text'
                placeholder="What do you need help with?"
                className="px-3 outline-none grow text-[18px] text-dark-solid placeholder:text-dark-solid max-md:hidden bg-[#FFF8E7] font-montserrat"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className='my-auto bg-primary-solid xl:w-12 xl:h-12 w-[30px] h-[30px] rounded-lg' onClick={() => onSearch(text)}>
                <Image
                    src="/assets/Homepage/Icons/SVG Icon/Search2.svg"
                    width={24}
                    height={24}
                    alt="serach-icon"
                    className='mx-auto align-middle max-xl:w-[18px] '
                />
            </button>
        </div>
    )
}
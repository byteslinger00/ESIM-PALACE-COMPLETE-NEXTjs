import Image from 'next/image'

interface props {
    src: string;
    title: string;
}

export const Option:React.FC<props> = ({src, title}) => {
    return(
        <div className="bg-white  p-[17px] w-full font-montserratbold flex flex-row gap-3 rounded-lg text-left">
            <Image src={`/assets/Support Page/Icons/SVG Icon/${src}.svg`} width={22} height={22} alt="option" className='max-xl:w-[18px]'/>
            <p className='xl:text-[16px] text-[14px]'>{title}</p>
        </div>
    )
}
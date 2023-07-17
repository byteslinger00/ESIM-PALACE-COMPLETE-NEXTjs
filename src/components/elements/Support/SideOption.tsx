import Image from 'next/image'

interface props {
    src: string;
    title: string;
    index: number;
    selected_index: number;
    onClick: any;
}

export const Option:React.FC<props> = ({src, title, index, selected_index, onClick}) => {
    return(
        <div className={`${index === selected_index ?'bg-[#FFECBE]' :'bg-white'}  p-[17px] w-full font-montserratbold flex flex-row gap-3 rounded-lg text-left cursor-pointer`} onClick={()=>onClick(index)}>
            <Image src={`/assets/Support Page/Icons/${src}.svg`} width={22} height={22} alt="option" className='max-xl:w-[18px]'/>
            <p className='xl:text-[16px] text-[14px]'>{title}</p>
        </div>
    )
}
import Image from 'next/image'
interface props {
    src: string;
    title: string;
    data: number;
    validity: number;
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Card: React.FC<props> = ({ src, title, data, validity, showModal }) => {
    return (
        <div className="px-5 py-5 border-[1px] bg-white border-[#C8E8FF] rounded-2xl flex flex-col gap-4 font-montserrat">
            <Image src={src} width={380} height={240} alt="Package-Card" className='w-auto h-auto' />
            <p className='lg:text-[24px] text-[14px] text-left font-extrabold'>{title}</p>
            <hr className="opacity-20" />
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Packages page/Icons/Internet.svg' width={24} height={24} alt="internet" />
                    <p className="lg:text-[16px] text-[14px] leading-5 my-auto font-medium">Data</p>
                </div>
                <div className="grow"></div>
                <p className="font-montserrat2xl leading-6 lg:text-[19px] text-[16px]">{data}GB</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Packages page/Icons/Calender.svg' width={24} height={24} alt="internet" />
                    <p className="lg:text-[16px] text-[14px] leading-5 my-auto font-medium">Validity</p>
                </div>
                <div className="grow"></div>
                <p className="font-montserrat2xl leading-6 lg:text-[19px] text-[16px]">{validity} Days</p>
            </div>
            <button
                className="text-black w-full  py-4 px-6 text-center font-bold lg:text-[16px] text-[10px] leading-[11px] rounded-lg border-[#F2B21B] border-[1px] bg-[#FFF8E7] hover:bg-[#F2B21B]"
                onClick={()=>showModal(true)}
                >
                US $5.00 - Buy Now
            </button>
        </div>
    )
}
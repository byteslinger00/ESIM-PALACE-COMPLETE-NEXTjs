import Image from 'next/image'

interface props {
    data: number;
    validity: number;
}

export const Property:React.FC<props> = ({data,validity}) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Internet.svg' width={24} height={24} alt="internet" />
                    <p className="lg:text-[16px] text-[14px] leading-5 my-auto font-medium">Data</p>
                </div>
                <div className="grow"></div>
                <p className="font-montserrat2xl leading-6 lg:text-[19px] text-[16px]">{data} GB</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <Image src='/assets/Homepage/Icons/SVG Icon/Calender.svg' width={24} height={24} alt="internet" />
                    <p className="lg:text-[16px] text-[14px] leading-5 my-auto font-medium">Validity</p>
                </div>
                <div className="grow"></div>
                <p className="font-montserrat2xl leading-6 lg:text-[19px] text-[16px]">{validity} Days</p>
            </div>
        </div>
    )
}
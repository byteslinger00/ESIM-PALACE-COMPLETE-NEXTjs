import Image from 'next/image'

interface props {
    src: string;
    title: string;
    size: number;
    price: number;
    subtotal: number;
    discount: number;
}

export const Card: React.FC<props> = ({ src, title, size, price, subtotal, discount }) => {
    return (
        <div className="p-10 bg-[#F9F7F7] rounded-[14px] flex flex-col gap-8 xl:text-[24px] text-[16px] text-left">
            <div className="flex flex-row gap-6 font-montserrat">
                <Image src={src} width={150} height={100} alt="Country Card" className='max-xl:w-[120px]'/>
                <p className='font-hellix grow m-auto'>{title}</p>
                <p className='font-montserratbold m-auto'>{size}GB</p>
                <p className='font-montserratbold m-auto'>${price}</p>
            </div>
            <hr className='border-[#E1E1E1]' />
            <div className='flex flex-row'>
                <p className='font-montserratbold grow'>Subtotal</p>
                <p className='font-montserratbold'>${subtotal}</p>
            </div>
            <div className='flex flex-row'>
                <div className='grow flex flex-row gap-6'>
                    <p className=''>Discount</p>
                    <div className='flex flex-row gap-1'>
                        <Image src="/assets/Transaction Page/Icons/SVG Icon/Hot sale.svg" width={16} height={16} alt="Hot Sale" />
                        <p>ESIMTEST2023</p>
                    </div>

                </div>
                <p className='font-montserratbold'>-${discount}</p>
            </div>
            <hr className='border-[#E1E1E1]' />
            <div className='flex flex-row'>
                <p className='font-montserratbold grow'>Total</p>
                <p className='font-montserratbold'>${subtotal - discount}</p>
            </div>
        </div>
    )
}
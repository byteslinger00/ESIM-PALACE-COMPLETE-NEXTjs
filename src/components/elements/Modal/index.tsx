'use client'
import Image from 'next/image'
import { Property } from '../common/Property'
import { Counter } from './Counter'
import { OrangeButton } from '../common/OrangeButton'
import { Properties } from './SimProperty'

interface props {
    showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<props> = ({ showModal }) => {
    return (
        <div className="w-full h-full top-0 left-0 overscroll-contain block absolute">
            <div className="bg-[#0E2C40B8] w-full h-full top-0 left-0 z-[10] overscroll-contain block absolute" onClick={() => showModal(false)}></div>
            <div className="relative 2xl:w-[60%] xl:w-[80%] w-[90%] xl:px-[60px] xl:py-20 p-10 bg-white rounded-[32px] z-[100] flex md:flex-row flex-col font-montserrat xl:gap-[85px] gap-[30px] text-left position-center">
                <Image src="/assets/Packages page/Icons/SVG Icon/Close.svg" width={26} height={26} alt="close" className='absolute top-0 right-0 cursor-pointer xl:hidden' onClick={() => showModal(false)}/>
                <div className="bg-white flex flex-col gap-4 xl:min-w-[380px]">
                    <Image src='/assets/Packages page/Image/Rectangle 258.png' width={380} height={240} alt="modal-logo" className='xl:!h-[240px] max-xl:mx-auto'/>
                    <h2 className='font-montserrat2xl xl:text-[24px] text-[20px]'>Colombia</h2>
                    <hr className='border-[#C8E8FF]' />
                    <Property data={3} validity={15} />
                    <hr className='border-[#C8E8FF]' />
                    <div className='flex flex-row gap-6'>
                        <p className='text-[24px] text-[#F2B21B] font-montserrat my-auto'>$5.00</p>
                        <Counter />
                    </div>
                    <div className='flex flex-row gap-3'>
                        <input type='checkbox' className='w-[24px] h-[24px] my-auto' />
                        <p className='xl:text-[16px] text-[14px]'>I have read and accepted the terms of service and privacy policy.</p>
                    </div>
                    <OrangeButton text='Buy Now' />
                </div>
                <div className="bg-[#EBF6FF] p-10 whitespace-normal flex flex-col gap-10">
                    <div className='flex flex-col gap-6'>
                        <div className='xl:text-[24px] text-[18px]'>
                            <span className='font-montserratbold'>ESIM for:</span>Colombia
                        </div>
                        <p className='xl:text-[18px] text-[16px]'>
                            An eSIM (embedded-SIM) is a form of SIM card that is embedded directly into a device.
                            Instead of an integrated circuit located on a removable SIM card, typically eSIM consists of software installed onto
                            an eUICC chip permanently attached to a device. .
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Properties title='Network' text='Proximius PLC' />
                        <Properties title='Speed' text='Proximius PLC' />
                        <Properties title='Speed' text='Proximius PLC' />
                        <Properties title='Tethering / Hotspot' text='Proximius PLC' />
                        <Properties title='APN' text='Proximius PLC' />
                        <Properties title='Activation' text='Automatic, activated when connected to a cellular network.' />
                        <Properties title='Compatibillity' text='all smartphones with eSim enabled technology. Functionality on smartwatches and tablets is not guaranteed.' />
                        <Properties title='Duration' text='Packages will last the full duration period as specified, unless all the data is used before the end of the duration period. Any unused data will expire after the period ends.re.' />
                    </div>
                </div>
            </div>
        </div>
    )
}
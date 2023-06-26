import { Logo } from '@/components/SignUp/Logo';
import { OrangeButton } from '@/components/elements/common/OrangeButton';
import Image from 'next/image'
export default function Page() {
    return (
        <main className="mt-[180px] relative">
            <div className="mx-9 grid xl:grid-cols-2 grid-cols-1">
                <div>
                    <div className='md:w-[630px] w-full md:p-[50px] md:gap-5 gap-4 bg-white xl:float-right mx-auto md:big-shadow rounded-[32px] flex flex-col font-montserrat'>
                        <h1 className='md:text-[48px] text-[30px] font-montserrat2xl text-center mb-[10px]'>Log In</h1>
                        <input type="text" className='bg-[#EBF6FF] rounded-[14px] md:text-[18px] text-[14px] px-5 py-4 text-[#081B2782] placeholder:text-[#081B2782]' placeholder='Helex Mofidex' />
                        <input type="text" className='bg-[#EBF6FF] rounded-[14px] md:text-[18px] text-[14px] px-5 py-4 text-[#081B2782] placeholder:text-[#081B2782]' placeholder='info@example.com' />
                        <input type="text" className='bg-[#EBF6FF] rounded-[14px] md:text-[18px] text-[14px] px-5 py-4 text-[#081B2782] placeholder:text-[#081B2782]' placeholder='+123 4456 7889 88' />
                        <input type="text" className='bg-[#EBF6FF] rounded-[14px] md:text-[18px] text-[14px] px-5 py-4 text-[#081B2782] placeholder:text-[#081B2782]' placeholder='**** **** **** ****' />
                        <div className='md:text-[18px] text-[14px] max-md:text-center'>By signing up you agree to Dataesim’s
                            <a href="/privacy" className='font-montserratbold'>Terms of Service</a> and
                            <a href="/privacy" className='font-montserratbold'> Privacy Policy.</a>
                        </div>
                        <button className="py-6 px-9 md:max-w-[245px] md:text-[18px] text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold">
                            <p className="md:leading-[13px] leading-[11px]">Log In</p>
                        </button>
                        <p className='md:text-[18px] text-[14px] max-md:mx-auto'>Or Sign Up Using</p>
                        <div className='flex flex-row gap-4 max-md:mx-auto'>
                            <Logo type='Apple' />
                            <Logo type='Facebook' />
                            <Logo type='Google' />
                        </div>
                        <hr className='border-[#DDDDDD]' />
                    </div>
                </div>
                <div className="w-full bg-signup-background bg-cover bg-center bg-no-repeat max-xl:hidden">

                </div>

            </div>
            <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 my-[150px] font-montserrat text-dark-solid text-center">
                <div className="w-full flex flex-col gap-10">

                </div>
            </section>
        </main>
    );
}

import Image from 'next/image'

interface props {
    type: string;
}

export const Logo:React.FC<props> = ({type}) => {
    return (
        <div className='p-3 rounded-full bg-[#EBF6FF]'>
            <Image src={`/assets/Sign up/Icons/SVG Icon/${type} logo.svg`} width={24} height={24} alt="apple login" />
        </div>
    )
}
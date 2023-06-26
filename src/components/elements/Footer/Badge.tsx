import Image from "next/image";

interface props {
    type : string;
}

export const Badge:React.FC<props> = ({type}) => {
    return (
        <div className="sm:w-[60px] sm:h-[30px] w-[50px] h-[25px] sm:px-4 sm:py-2 px-2 py-1 bg-white rounded-md">
            <Image src={`/assets/Homepage/Icons/SVG Icon/${type}.svg`} width={58} height={28} alt="footer-icon" className="w-auto h-auto mx-auto"/>
        </div>
    )

}
interface props {
    type: string;
    header: string;
    placeholder: string;
}

export const TextInput:React.FC<props> = ({type, header, placeholder}) => {
    return (
        <div className="flex flex-col gap-3 text-left font-montserrat">
            <p className="lg:text-[20px] text-[16px] font-semibold">{header}</p>
            <input type={type} placeholder={placeholder} className="lg:text-[18px] text-[14px] bg-[#EBF6FF] px-6 py-4 rounded-xl  outline-none"/>
        </div>
    )
}
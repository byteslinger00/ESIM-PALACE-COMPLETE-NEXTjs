interface props {
    full_name?: string;
    email?: string;
    phone_number?: string;
}

export const Info:React.FC<props> = ({full_name, email, phone_number}) => {
    return (
        <div className="border-[#DDDDDD] border-[1px] rounded-[24px] p-10 text-left max-lg:flex max-lg:flex-col max-lg:gap-10">
            <div className="lg:float-left flex flex-col gap-6 ">
                <p className="text-[20px] font-montserratbold">Customer Information</p>
                <div className="flex flex-col gap-1 text-[18px] font-montserrat">
                    <div className="text-[#081B2782]"><span className="font-montserratbold text-dark-solid">Name: </span>{full_name}</div>
                    <div className="text-[#081B2782]"><span className="font-montserratbold text-dark-solid">Email: </span>{email}</div>
                    <div className="text-[#081B2782]"><span className="font-montserratbold text-dark-solid">Phone: </span>{phone_number}</div>
                </div>
            </div>
            <div className="lg:float-right flex flex-col gap-6 ">
                <p className="text-[20px] font-montserratbold">Billing Address</p>
                <div className="flex flex-col gap-1 text-[18px] font-montserrat">
                    <div className="text-[#081B2782]">{full_name}</div>
                    <div className="text-[#081B2782]">20 Bay Street</div>
                    <div className="text-[#081B2782]">Toronto ON MGJ 2N8<br /> Canada</div>
                </div>
            </div>
        </div>
    )
}
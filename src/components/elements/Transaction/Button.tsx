interface props {
    title: string;
    color: string;
}
export const Button: React.FC<props> = ({ title, color }) => {
    return (
        <button className="w-[260px] border-[#F2B21B] border-[1px] rounded-lg" style={{backgroundColor: color}}>
            <p className="text-center leading-[64px] font-montserrat text-[18px]">{title}</p>
        </button>
    )
}
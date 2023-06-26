interface props {
    title: string;
    text: string;
}

export const Properties: React.FC<props> = ({ title, text }) => {
    return (
        <div className="xl:text-[20px] text-[18px]">
            <span className="font-montserratbold">{title}</span>:{text}
        </div>
    )
}
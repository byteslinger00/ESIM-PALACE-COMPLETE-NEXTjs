import { DetailCard } from "./DetailCard"

interface props {
    index: number;
}
export const Details:React.FC<props> = ({index}) => {
    return (
        <div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-[30px] mb-5 grid-item" style={{gridArea:`A${index}`}}>
            <DetailCard />
            <DetailCard />
            <DetailCard />
        </div>
    )
}
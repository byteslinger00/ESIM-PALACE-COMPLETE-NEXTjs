import { details } from "@/types/details.type";
import { DetailCard } from "./DetailCard"

interface props {
    data?: Array<details>;
}
export const Details: React.FC<props> = ({ data }) => {
    return (
        <div className={`w-full grid xl:grid-cols-3 grid-cols-1 gap-[30px] mb-5 `}>
            {
                data?.length === 0 ? ''
                    :
                    data?.map((item, index) =>
                        <DetailCard key={data[0].country_name + '-details-' + index}
                            country_name={item.country_name}
                            country_code={item.country_code}
                            data={item.data_GB}
                            validity={item.validity_days}
                            plan={item.plan_type} 
                            currency={item.currency}
                            price={item.price}
                        />)
            }
        </div>
    )
}
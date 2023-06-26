import Image from 'next/image'

interface props {
    type: string;
    description: string;
}

export const Category:React.FC<props> = ({type, description}) => {
    return (
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-[177px]">
            <Image
              src={`/assets/Homepage/Ellements/${type}.png`}
              width={150}
              height={220}
              alt=""
              className="mx-3"
            />
            <p className="font-montserrat font-semibold text-[19px]">
              {description}
            </p>
          </div>
        </div>
    )
}
import Image from "next/image";

interface props {
  src: string;
  country: string;
  id: number;
}

export const CountryCard: React.FC<props> = ({ id, src, country }) => {
  return (
    <div className="p-3 rounded-2xl hover:bg-white border-[#C8E8FF] border-[1px] flex flex-col gap-2">
      <Image
        src={`/assets/Homepage/Image/Frame 1000007080-${src}.png`}
        width={208}
        height={150}
        alt=""
        className="w-full"
      />
      <p className="text-1st-color font-bold font-hellix sm:text-[24px] text-[18px] text-center">
        {country}
      </p>
      <button className="mx-auto rounded-full">
        <Image
          src="/assets/Homepage/Icons/SVG Icon/Down chevron.svg"
          width={30}
          height={30}
          alt="down"
        />
      </button>
    </div>
  );
};

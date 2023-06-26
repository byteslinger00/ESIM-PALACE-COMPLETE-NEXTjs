import Image from "next/image";

interface props {
    type: string;
}

export const PlayStore:React.FC<props> = ({type}) => {
  return (
    <button className="font-montserrat bg-accent-1-solid rounded-[10px] flex flex-row sm:gap-2 sm:px-[30px] px-[20px] py-3 max-xl:mx-auto min-w-[174px]">
      <Image
        src={`/assets/Homepage/Icons/SVG Icon/${type}.svg`}
        width={46}
        height={46}
        alt="store-logo"
        className="sm:w-[46px] sm:h-[46px] w-[30px] h-[30px] my-auto"
      />
      <div className="text-white text-left">
        <p className="sm:text-[15px] text-[12px] leading-[18px]">{type === 'Apple' ? 'Download on the': 'GET IT ON' }</p>
        <p className="sm:text-[24px] text-[14px] sm:leading-[30px] font-semibold">{type === 'Apple' ? 'App Store': 'Google Play' }</p>
      </div>
    </button>
  );
};

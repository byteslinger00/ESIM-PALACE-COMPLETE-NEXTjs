export const Reload:React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-montserratbold lg:text-[24px] text-[16px] text-left">
        Please reload page if no qr code is shown
      </p>
      <button className="bg-[#F2B21B] w-full rounded-lg">
        <p className="lg:text-[18px] text-[16px] font-montserrat leading-[64px]">
          Your Order is completed!
        </p>
      </button>
    </div>
  );
};

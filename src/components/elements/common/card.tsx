interface props {
  heading: string;
  description: string;
  address?: string;
}
export const Card: React.FC<props> = ({ heading, description, address }) => {
  return (
    <div className=" lg:px-9 lg:py-[50px] lg:gap-6 p-[30px] gap-[15px] bg-white border-[#C8E8FF] border-[1px] rounded-[16px] flex flex-col font-montserrat text-center shadow-[0_10px_80px_0px_rgba(20,61,89,0.05)]">
      <p className="font-montserrat2xl lg:text-[32px] text-[24px]">{heading}</p>
      <p className="lg:text-[18px] text-[16px] grow">{description}</p>
      {address ? (
        <div className="text-[16px] flex flex-col lg:gap-6 gap-[15px]">
          <hr />
          <div>
            <span className="font-semibold">
              Email<span className="max-lg:hidden"> Address</span>
            </span>
            :{address}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

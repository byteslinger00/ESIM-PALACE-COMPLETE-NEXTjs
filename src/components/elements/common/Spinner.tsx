import { SyncLoader } from "react-spinners";

export const Spinner = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#00000020] z-[500]">
      <div className="absolute position-center w-[60px] h-[30px]">
        <SyncLoader size={15} color="#F2B21B" />
      </div>
    </div>
  );
};

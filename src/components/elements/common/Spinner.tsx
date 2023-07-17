import { SyncLoader } from "react-spinners";
interface props {
  is_search?: boolean;
}
export const Spinner:React.FC<props> = ({is_search}) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full ${is_search?'bg-transparent' : 'bg-[#00000020]'}  z-[500]`}>
      <div className="absolute position-center w-[60px] h-[30px]">
        <SyncLoader size={15} color="#F2B21B" />
      </div>
    </div>
  );
};

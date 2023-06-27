import { HashLoader } from "react-spinners"

export const Spinner = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000020]">
            <div className="absolute position-center w-[50px] h-[50px]">
              <HashLoader size={50} color="#36D7B7" />
            </div>
          </div>
    )
}
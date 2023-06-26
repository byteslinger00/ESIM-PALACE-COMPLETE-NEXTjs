import { PlayStore } from "../elements/Homepage/PlayStore";

export const DownloadESIM = () => {
  return (
    <div className="relative xl:mx-[300px] text-dark-solid xl:h-[770px]  mb-10 ">
      <div className="xl:absolute mx-auto w-full xl:h-[830px] h-[700px] bg-homepage-background1 xl:bg-contain bg-cover bg-center bg-no-repeat xl:bg-[left_top_-1rem] xl:z-[-1] top-0 left-[-100px]"></div>

      <div className="md:w-[670px] xl:mt-0 mt-10 w-full xl:pt-[260px] 2xl:ml-[630px] mx-auto flex flex-col gap-[18px]">
        <p className="font-montserrat2xl xl:text-[48px] text-[40px] leading-[60px] xl:w-[500px] max-xl:text-center">
          Download eSim Palace Mobile App
        </p>
        <p className="font-montserrat text-[20px] leading-[30px] max-xl:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          dignissim cursus nisl
        </p>
        <div className="flex flex-row sm:gap-[30px] gap-[10px] px-3">
          <PlayStore type="Apple" />
          <PlayStore type="Google Play" />
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import { Badge } from "../Footer/Badge";

export const Footer = () => {
  return (
    <div className="mi-medium:px-[300px] xl:px-[100px] px-5  py-[100px] bg-footer-solid  font-montserrat flex flex-col">
      <div className="flex lg:flex-row flex-col max-lg:mx-auto mi-medium:gap-[90px] gap-[20px]">
        <div className="flex flex-col gap-9 grow">
          <Image
            src="/assets/light-logo.svg"
            width={140}
            height={100}
            alt="footer-logo"
            className="h-[100px] max-lg:mx-auto"
          />
          <p className="text-dark-shade-2 text-[16px] leading-[26px] w-[272px] max-lg:text-center max-lg:mx-auto">
            Get the royal treatment and land connected in 200+ countries with an
            eSim from eSim Palace.
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="leading-[100px] h-[100px]">
            <p className="align-middle text-[16px] font-semibold text-white leading-[26px] inline-block">
              Popular Countries
            </p>
          </div>
          <div className="flex flex-row xl:gap-[70px] gap-[30px] grow text-dark-shade-2">
            <div className="flex flex-col gap-3">
              <Link href="#">United States</Link>
              <Link href="#">United Kingdom</Link>
              <Link href="#">Turkey</Link>
              <Link href="#">France</Link>
              <Link href="#">Italy</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="#">Japan</Link>
              <Link href="#">Spain</Link>
              <Link href="#">United Arab Emirates</Link>
              <Link href="#">Germany</Link>
              <Link href="#">Canada</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="leading-[100px] h-[100px]">
            <p className="align-middle text-[16px] font-semibold text-white leading-[26px] inline-block">
              Partner with Us
            </p>
          </div>
          <div className="flex flex-row gap-[70px] grow text-dark-shade-2">
            <Link href="#">Affiliate Partners</Link>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="leading-[100px] h-[100px]">
            <p className="align-middle text-[16px] font-semibold text-white leading-[26px] inline-block">
              About us
            </p>
          </div>

          <div className="flex flex-col text-dark-shade-2 gap-3">
            <Link href="#">About Our Company</Link>
            <Link href="#">Support</Link>
            <Link href="#">Contact us</Link>
          </div>
        </div>
      </div>
      <hr className="mt-[100px] border-[#234A64]" />
      <div className="flex lg:flex-row flex-col gap-4 mt-[18px] max-lg:mx-auto">
        <p className="grow text-dark-shade-2 max-lg:text-center sm:text-[16px] text-[12px]">
          Copyright ©2023 <span className="text-white">eSim Palace Inc</span>. All
          Rights Reserved.
        </p>
        <div className="flex flex-row sm:gap-4 gap-2">
          <Badge type="Symbols" />
          <Badge type="Symbols-1" />
          <Badge type="Symbols-2" />
          <Badge type="Symbols-3" />
          <Badge type="Symbols-4" />
          <Badge type="Light-Mode" />
        </div>
      </div>
    </div>
  );
};

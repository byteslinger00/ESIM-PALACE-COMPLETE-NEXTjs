import Link from "next/link";

export const Nav = () => {
  return (
    <div className="my-auto flex flex-row 2xl:gap-[35px] gap-5 grow mi-high:ml-[130px] mx-high:ml-[20px] text-center max-lg:hidden">
      <Link
        href="/#"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        Home
      </Link>
      <Link
        href="/about"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        About us
      </Link>
      <Link
        href="/packages"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        Packages
      </Link>
      <Link
        href="/support"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        Support
      </Link>
      <Link
        href="/affiliates"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        Affiliates
      </Link>
      <Link
        href="/contact"
        className="font-montserrat text-white text-[16px] font-semibold "
      >
        Contact us
      </Link>
    </div>
  );
};

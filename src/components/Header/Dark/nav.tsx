import Link from "next/link";

export const Nav = () => {
  return (
    <div className="my-auto flex flex-row 2xl:gap-[35px] gap-5 grow mi-high:ml-[130px] mx-high:ml-[20px] text-center max-lg:hidden">
      <Link
        href="/"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        About us
      </Link>
      <Link
        href="/packages"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        Packages
      </Link>
      <Link
        href="/support"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        Support
      </Link>
      <Link
        href="/affiliates"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        Affiliates
      </Link>
      <Link
        href="/contact"
        className="font-montserrat text-dark-solid text-[16px] font-semibold hover:text-primary-solid"
      >
        Contact us
      </Link>
    </div>
  );
};

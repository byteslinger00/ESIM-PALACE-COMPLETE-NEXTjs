import { Button } from "./Button";

export const ContactUs = () => {
  return (
    <div className="max-lg:flex max-lg:flex-row max-lg:gap-[56px]">
      <div className="lg:float-left py-4">
        <a
          className="text-[#081B2782] m-auto max-lg:flex max-lg:flex-col"
          href="/contact"
        >
          <span className="font-montserratbold text-dark-solid">
            Need help?{" "}
          </span>
          Contact us
        </a>
      </div>

      <a href="/packages" className="lg:float-right">
        <Button title="Continue shopping" color="#F2B21B" />
      </a>
    </div>
  );
};

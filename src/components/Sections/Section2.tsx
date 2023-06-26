import { OrangeButton } from "../elements/common/OrangeButton";

interface props {
  heading: string;
  description: string;
  only_description?: boolean;
}

export const Section2: React.FC<props> = ({ heading, description, only_description }) => {
  return (
    <section className="xl:px-[300px] px-5 lg:pt-[150px] pt-[80px] text-dark-solid text-center" >
      <p className="font-montserrat2xl sm:text-[48px] text-[32px] sm:w-[70%] w-full mx-auto max-w-[800px]">{heading}</p>
      <p className="sm:w-[70%] sm:text-[20px] text-[16px] w-full max-w-[800px] mx-auto mb-[40px]">
        {description}
      </p>
      {!only_description ? <OrangeButton text="Learn More" no_responsive={true} /> : ''}
    </section>
  );
};

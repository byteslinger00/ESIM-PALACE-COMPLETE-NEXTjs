import { about } from "@/utils/page-description";
import { Card } from "../../elements/common/card";

export const Section3 = () => {
  return (
    <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 md:py-[135px] py-[40px] text-dark-solid text-center">
      <h1 className="font-montserrat2xl md:text-[48px] text-[32px] md:mb-[60px] mb-[25px]">Why an eSim?</h1>
      <div className="grid md:grid-cols-3 grid-rows-1 gap-[30px]">
        <Card heading={"Digital"} description={about.Digital} />
        <Card heading={"Fixed Cost"} description={about.Fixed} />
        <Card heading={"Easy To Use"} description={about.Easy} />
      </div>
    </section>
  );
};

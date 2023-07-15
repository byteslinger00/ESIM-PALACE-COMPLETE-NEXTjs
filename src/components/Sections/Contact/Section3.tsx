import { contact } from "@/utils/page-description";
import { Card } from "../../elements/common/card";

export const Section3 = () => {
  return (
    <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 md:py-[135px] py-[40px] text-dark-solid text-center">
      <h1 className="font-montserrat2xl md:text-[48px] text-[32px] md:mb-[60px] mb-[25px]">How To Get Hold of Us</h1>
      <div className="grid md:grid-cols-2 2xl:mx-[200px] xl:mx-[100px] grid-rows-1 gap-[30px]">
        <Card heading={"Support"} description={contact.Support} address="support@esimpalace.com"/>
        <Card heading={"Corporate"} description={contact.Corporate} address="corporate@esimpalace.com"/>
      </div>
    </section>
  );
};

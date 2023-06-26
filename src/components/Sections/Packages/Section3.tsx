"use client"
import { useState } from "react";
import { SelectTab } from "@/components/elements/Packages/SelectTab";
import { Card } from "@/components/elements/Packages/Card";
import { Search } from "@/components/elements/Packages/Search";
import { OrangeButton } from "@/components/elements/common/OrangeButton";
import { Modal } from "@/components/elements/Modal";
export const Section3 = () => {
    const [is_modal, showModal] = useState(false);
    return (
        <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[135px] bg-[#F9F7F7] text-dark-solid text-center flex flex-col gap-10">
            <SelectTab />
            <div className="flex flex-row gap-5">
                <select className="bg-[#FFF8E6] outline-none border-[1px] border-[#F2B21B] rounded-lg h-[50px] px-[15px] font-montserrat font-semibold md:hidden grow">
                    <option value={0}>Europe</option>
                    <option value={0}>North America</option>
                    <option value={0}>South America</option>
                    <option value={0} >Asia</option>
                    <option value={0}>Middle East</option>
                    <option value={0}>Africa</option>
                </select>
                <Search />
            </div>
            <div className="grid md:grid-cols-3 gap-[30px] grid-cols-2">
                <Card src="/assets/Packages page/Image/Rectangle 258.png" title="Argentina" data={1} validity={7} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 258-1.png" title="Bolivia" data={3} validity={15} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 258-2.png" title="Argentina" data={5} validity={30} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 258-3.png" title="Argentina" data={3} validity={15} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 258-4.png" title="Argentina" data={5} validity={30} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 258-5.png" title="Argentina" data={1} validity={7} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 259.png" title="Argentina" data={3} validity={15} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 259.png" title="Argentina" data={3} validity={15} showModal={showModal} />
                <Card src="/assets/Packages page/Image/Rectangle 259.png" title="Argentina" data={5} validity={30} showModal={showModal} />
            </div>
            <OrangeButton text="Show More Countries" />
            {is_modal ? <Modal showModal={showModal}/> : ''}
        </section>
    );
};

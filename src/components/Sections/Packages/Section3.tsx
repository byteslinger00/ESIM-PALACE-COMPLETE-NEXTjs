"use client"
import { useEffect, useState } from "react";

import { SelectTab } from "@/components/elements/Packages/SelectTab";
import { Card } from "@/components/elements/Packages/Card";
import { Search } from "@/components/elements/Packages/Search";
import { OrangeButton } from "@/components/elements/common/OrangeButton";
import { Modal } from "@/components/elements/Modal";
import getCountriesByRegion from "@/actions/Packages/getCountriesByRegion";
import { packages } from "@/types/packages.type";
import { Spinner } from "@/components/elements/common/Spinner";
import { toast } from 'react-toastify';

export const Section3 = () => {

    const [is_modal, showModal] = useState(false);
    const [selectedRegion, setRegion] = useState('South America');
    const [countries, setCountries] = useState<Array<packages>>();
    const [is_Loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true)
            const data = await getCountriesByRegion(selectedRegion);
            if (data === false) {
                toast.error("Invalid Region", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setLoading(false);
                return;
            }
            setCountries(data);
            setLoading(false);
        })()
    }, [selectedRegion]);

    return (
        <section className="relative mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[135px] bg-[#F9F7F7] text-dark-solid text-center flex flex-col gap-10">
            {is_Loading ? <Spinner /> : ''}

            <SelectTab setRegion={setRegion} selectedRegion={selectedRegion} />
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
                {countries?.length !== 0 ? countries?.map((item, index) => {
                    return (
                        <Card key={index}
                            country_code={item.country_code}
                            title={item.country_name}
                            data={1}
                            validity={7}
                            showModal={showModal}
                        />)
                }) : ''}
            </div>
            <OrangeButton text="Show More Countries" />
            {is_modal ? <Modal showModal={showModal} /> : ''}
        </section>
    );
};

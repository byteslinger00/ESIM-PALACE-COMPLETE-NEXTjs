"use client"
import { useState } from "react";
import Image from 'next/image'
import { Card } from "@/components/elements/Transaction/Card";
import { Button } from "@/components/elements/Transaction/Button";
import { Roaming } from "@/components/elements/Transaction/Roaming";
import { Reload } from "@/components/elements/Transaction/Reload";
import { Info } from "@/components/elements/Transaction/Info";
import { ContactUs } from "@/components/elements/Transaction/ContactUs";
export const Section3 = () => {
    return (
        <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[40px] bg-white text-dark-solid text-center flex flex-col gap-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-row gap-4">
                        <Image src="/assets/Transaction Page/Icons/Check mark.svg" width={64} height={64} alt="Check Mark" />
                        <div className="lg:text-[24px] text-[20px] grid grid-rows-2 font-montserratbold text-left">
                            <p>Order #1090</p>
                            <p>Thanks Helex Mofidex</p>
                        </div>
                    </div>
                    <hr className="border-[#DDDDDD]" />
                    <div className="flex flex-row gap-8 max-lg:mx-auto">
                        <Button title="QR code" color="#F2B21B" />
                        <Button title="Manual" color="#FFECBE" />
                    </div>
                    <Image src="/assets/Transaction Page/Icons/qr-code-svgrepo-com.svg" width={300} height={300} alt="QR Code" className="mx-auto" />
                    {/* Integrate With API */}
                    <Roaming />
                    <Reload />
                    <Info />
                    <ContactUs />
                    <hr className="border-[#DDDDDD] max-lg:hidden"/>
                    <p className="font-montserrat text-[18px] text-left max-lg:hidden">Purchase options cancellation policy</p>
                </div>
                <div className="max-lg:order-first">
                    <Card src="/assets/Transaction Page/Image/Frame 1000007080.png" title="China(Hong Kong)" size={1} price={5.00} subtotal={5.00} discount={1.00} />
                </div>
            </div>
        </section>
    );
};

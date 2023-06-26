'use client'
import Image from "next/image";
import { tabledata } from "@/utils/table-data";
import { useState } from "react";

export const TableSection = () => {

  const [brand, setBrand] = useState(0);
  
  return (
    <section className="2xl:px-[300px] xl:py-[120px] py-[40px] px-5 bg-[#F9F7F7] text-dark-solid text-center flex flex-col gap-[60px]">
      <p className="font-montserrat2xl md:text-[48px] text-[32px] mx-auto">
        Can I use eSims On My Phone?
      </p>

      {/* Table in pc */}
      <div className="border rounded-[24px] overflow-hidden border-[#FAE0A4] max-md:hidden">
        <table className="font-montserrat">
          <thead className="font-medium text-[24px]">
            <tr>
              <th className="bg-[#FBE8BB] w-[10%]">Brand</th>
              <th className="bg-[#FAE0A4] w-[45%]">eSim Enable Devices</th>
              <th className="bg-[#FBE8BB] w-[45%]">Explanations</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item, index) => (
              <tr key={"Brand" + index}>
                <td>{item.brand}</td>
                <td>
                  <ul>
                    {item.devices.map((device, index) => (
                      <li
                        key={item.brand + index}
                        className="flex flex-row gap-2"
                      >
                        <Image
                          src="/assets/About us Page/Icons/Check.svg"
                          width={12}
                          height={12}
                          alt="check"
                        />
                        {device}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{item.explanations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table in mobile */}
      <select className="bg-[#FFF8E6] outline-none border-[1px] border-[#F2B21B] rounded-lg h-[50px] px-[15px] font-montserrat font-semibold md:hidden" 
        onChange={(e)=>{setBrand(Number(e.target.value))}}
      >
        {tabledata.map((item,index) => (
          <option key={index} value={index} content="First Line<br>Second Line">{item.brand}</option>
        ))}
      </select>
      
      <div className="border rounded-[24px] overflow-hidden border-[#FAE0A4] md:hidden">
        <table className="font-montserrat">
          <thead className="font-medium text-[24px]">
            <tr>
              <th className="w-[10%]">{tabledata[brand].brand}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-transparent">
                <h1 className="mb-[25px] text-[24px] font-semibold leading-[25px]">
                  eSIM Enable Devices
                </h1>
                <ul>
                  {tabledata[brand].devices.map((device, index) => (
                    <li
                      key={"mobile" + tabledata[brand].brand + index}
                      className="flex flex-row gap-2 font-normal"
                    >
                      <Image
                        src="/assets/About us Page/Icons/SVG Icon/Check.svg"
                        width={12}
                        height={12}
                        alt="check"
                      />
                      {device}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="bg-transparent">
                <h1 className="mb-[25px] text-[24px] font-semibold leading-[25px]">
                  Explanations
                </h1>
                <p className="font-normal">{tabledata[brand].explanations}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

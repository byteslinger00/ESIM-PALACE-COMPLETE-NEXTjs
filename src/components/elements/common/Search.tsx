"use client";
import Image from "next/image";
import { useState } from "react";
import {toast} from 'react-toastify'
interface props {
  handleSearch: any;
}

export const Search: React.FC<props> = ({ handleSearch }) => {
  const [searchvalue, setValue] = useState("");
  const searchHandler = () => {
    if(searchvalue.length < 3)
    {
      toast.error("You must enter 3 characters!");
      return;
    }
    handleSearch(searchvalue);
  };
  return (
    <div className="xl:w-[510px] w-[342px] flex flex-row rounded-lg px-3 py-2  bg-white">
      <input
        type="text"
        placeholder="Where Would You Like To Roam?"
        className="px-3 outline-none grow text-[18px] text-[#828282]"
        value={searchvalue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if(e.key === 'Enter')
            searchHandler();
        }}
      />
      <button
        className="my-auto bg-primary-solid xl:w-12 xl:h-12 w-[30px] h-[30px] rounded-lg"
        onClick={searchHandler}
      >
        <Image
          src="/assets/Homepage/Icons/SVG Icon/Search2.svg"
          width={24}
          height={24}
          alt="serach-icon"
          className="mx-auto align-middle max-xl:w-[18px] "
        />
      </button>
    </div>
  );
};

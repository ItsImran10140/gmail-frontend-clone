"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";
import { BsGrid3X3GapFill } from "react-icons/bs";

const NavBarIcons = [
  {
    logo: (
      <FaRegQuestionCircle className="text-gray-600 lg:text-[20px] md:text-[15px]" />
    ),
  },
  {
    logo: (
      <IoSettingsSharp className="text-gray-600 lg:text-[20px] md:text-[15px]" />
    ),
  },
  {
    logo: (
      <PiStarFourFill className="text-gray-600 lg:text-[20px] md:text-[15px]" />
    ),
  },
  {
    logo: (
      <BsGrid3X3GapFill className="text-gray-600 lg:text-[20px] md:text-[15px]" />
    ),
  },
];

const NavBar = () => {
  const [select, setSelect] = useState(false);

  return (
    <div>
      <div className="flex h-[60px] justify-around bg-[#f9fafe]">
        <div className="flex w-[20%]">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer justify-center mx-2 hover:bg-[#d1d1d156] rounded-full w-[40px] h-[40px]">
              <GiHamburgerMenu className="text-gray-600 lg:text-[20px] md:text-[15px]" />
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <span>
              <Image
                src="/gmail.png"
                alt="logo"
                width={30}
                height={30}
                className="md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]"
              />
            </span>
            <span className="text-xl ml-2 text-gray-600 font-medium">
              Gmail
            </span>
          </div>
        </div>
        <div className="flex items-center w-[70%]">
          <div
            className={`${
              select ? "bg-white shadow-md" : ""
            } bg-[#e9edf6] max-w-[700px] md:w-[80%] md:h-[35px] lg:w-[90%] lg:h-[45px] flex rounded-3xl items-center px-2`}
            onClick={() => {
              setSelect(true);
            }}
          >
            <div className="lg:w-[35px] lg:h-[35px] cursor-pointer hover:bg-[#d1d1d18e] flex items-center justify-center rounded-full mr-2">
              <IoSearchSharp className="lg:text-xl md:text-[15px] text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="Search mail"
              className="h-full w-full outline-none"
            />
            <div className="w-[35px]  cursor-pointer h-[35px] flex items-center justify-center hover:bg-[#d1d1d18e] rounded-full">
              <HiAdjustmentsHorizontal className="lg:text-xl md:text-[15px]" />
            </div>
          </div>
        </div>

        <div className="flex  w-[15%]">
          <div className="flex  items-center w-[80%]">
            <div className=" flex w-full h-full items-center justify-evenly">
              {NavBarIcons.map((data, i) => (
                <span
                  key={i}
                  className=" h-[35px] w-[35px] cursor-pointer hover:bg-[#d1d1d156] rounded-full flex justify-center items-center"
                >
                  <div>{data.logo}</div>
                </span>
              ))}
            </div>
          </div>
          <div className=" flex items-center">
            <div className="bg-blue-400 cursor-pointer lg:w-[30px] lg:h-[30px] flex items-center justify-center text-white rounded-full md:w-[20px] md:h-[20px]">
              I
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ToolLogos = [
  {
    logo: "/calendar.png",
  },
  {
    logo: "/google.png",
  },
  {
    logo: "/check.png",
  },
  {
    logo: "/contacts.png",
  },
];

const Tools = () => {
  return (
    <div>
      {ToolLogos.map((data, i) => (
        <>
          <div className="flex justify-center ">
            <div className="flex items-center cursor-pointer my-3 justify-center mx-2 hover:bg-[#d1d1d156] rounded-full lg:w-[40px] lg:h-[40px] md:h-[20px] md:w-[20px]">
              <Image
                key={i}
                src={data.logo}
                alt="logo"
                width={20}
                height={20}
                className="md:h-[15px] md:w-[15px] lg:h-[20px] lg:w-[20px]"
              />
            </div>
          </div>
        </>
      ))}
      <div className="flex justify-center border-t-1 border-gray-200">
        <div className="flex items-center cursor-pointer justify-center mt-4 mx-2 hover:bg-[#d1d1d156] rounded-full lg:w-[40px] lg:h-[40px] lg:text-xl md:text-[12px]">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Tools;

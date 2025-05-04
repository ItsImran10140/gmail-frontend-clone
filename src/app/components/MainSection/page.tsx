import React from "react";
import Tools from "./Tools/page";
import SideBar from "./SideBar/page";
import Emails from "./Emails/page";

const MainSection = () => {
  return (
    <div>
      <div className="flex h-full">
        <div className="lg:w-[20%] md:w-[18%] h-full">
          <SideBar />
        </div>
        <div className="rounded-2xl lg:w-[75%] md:w-[80%] bg-white">
          <Emails />
        </div>
        <div className=" lg:w-[5%]">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default MainSection;

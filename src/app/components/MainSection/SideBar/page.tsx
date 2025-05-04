"use client";

import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

import { MdInbox } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { MdSend } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { MdLabelImportantOutline } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

const SidebarOption = [
  {
    title: "Inbox",
    icon: <MdInbox />,
  },
  {
    title: "Starred",
    icon: <IoIosStarOutline />,
  },
  {
    title: "Snoozed",
    icon: <GoClock />,
  },
  {
    title: "Sent",
    icon: <MdSend />,
  },
  {
    title: "Drafts",
    icon: <IoDocumentOutline />,
  },
  {
    title: "Important",
    icon: <MdLabelImportantOutline />,
  },
  {
    title: "Chats",
    icon: <BsChatSquareText />,
  },
  {
    title: "Scheduled",
    icon: <MdOutlineScheduleSend />,
  },
  {
    title: "All Mail",
    icon: <LuMails />,
  },
  {
    title: "Spam",
    icon: <RiSpam2Line />,
  },
  {
    title: "Trash",
    icon: <BsTrash />,
  },
];

const SideBar = () => {
  const [selected, setSelected] = useState("Inbox");
  const [isExpanded, setIsExpanded] = useState(false);

  // Split options into initial visible items and additional items
  const initialItems = SidebarOption.slice(0, 5); // Show first 5 items (Inbox to Drafts)
  const additionalItems = SidebarOption.slice(5); // Remaining items

  return (
    <div className="pr-2 bg-[#f9fafe]">
      <div className="pt-2">
        <div className="flex hover:shadow-lg lg:w-[65%] md:w-[50%] ml-2 mb-4 lg:h-[55px] md:h-[45px] lg:text-[15px] md:text-xs rounded-2xl font-medium text-gray-800 justify-center  items-center bg-[#c2e8fb] cursor-pointer">
          <span>
            <MdOutlineEdit className="lg:text-xl md:text-xs mr-2" />
          </span>
          Compose
        </div>
      </div>
      <div>
        <ul>
          {/* Render initial visible items */}
          {initialItems.map((data, index) => (
            <li
              className={`flex items-center lg:text-[15px] text-gray-700 md:text-xs rounded-r-2xl h-[30px] hover:bg-[#d1d1d18e] cursor-pointer ${
                selected === data.title
                  ? "bg-[#d4d3fd]  hover:bg-[#d3e3fd]"
                  : ""
              }`}
              key={index}
              onClick={() => setSelected(data.title)}
            >
              <div className="flex w-full items-center rounded-r-2xl h-full">
                <span
                  className={`mx-3 ${
                    selected === data.title ? "text-gray-800" : ""
                  }`}
                >
                  {data.icon}
                </span>
                <span
                  className={
                    selected === data.title ? "text-gray-800 font-semibold" : ""
                  }
                >
                  {data.title}
                </span>
              </div>
            </li>
          ))}
          {additionalItems.length > 0 && (
            <li
              className="flex items-center rounded-r-2xl h-[30px] hover:bg-[#d1d1d18e] cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex w-full items-center lg:text-[15px]  md:text-xs rounded-r-2xl h-full">
                <span className="mx-3"></span>
                {isExpanded ? "Less" : "More"}
              </div>
            </li>
          )}
          {isExpanded &&
            additionalItems.map((data, index) => (
              <li
                className={`flex items-center text-gray-700 rounded-r-2xl h-[30px] hover:bg-[#d1d1d18e] cursor-pointer ${
                  selected === data.title
                    ? "bg-[#d3e3fd] hover:bg-[#d3e3fd]"
                    : ""
                }`}
                key={index + initialItems.length}
                onClick={() => setSelected(data.title)}
              >
                <div className="flex w-full lg:text-[15px] md:text-xs items-center rounded-r-2xl h-full">
                  <span
                    className={`mx-3 ${
                      selected === data.title ? "text-gray-800" : ""
                    }`}
                  >
                    {data.icon}
                  </span>
                  <span
                    className={
                      selected === data.title ? "text-gray-800 font-medium" : ""
                    }
                  >
                    {data.title}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

// bg-[#d3e3fd]

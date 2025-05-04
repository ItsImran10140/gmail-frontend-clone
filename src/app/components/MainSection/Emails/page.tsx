/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TbReload } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { RiSpam2Line } from "react-icons/ri";
import { RiInboxFill } from "react-icons/ri";
import Column from "./Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { emails } from "@/app/utils/emails";

const Emails = () => {
  const [tasks, setTasks] = useState(emails);

  const getTaskPos = (id: number) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div>
      <div className="flex items-center  justify-between  p-2">
        {/* == */}
        <div className="flex w-[150px] items-center justify-evenly">
          <div className="  flex h-[35px] rounded-sm">
            <div className=" hover:bg-[#d1d1d156] cursor-pointer px-1 flex items-center">
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <span>
              <select className="w-5 h-full hover:bg-[#d1d1d156] cursor-pointer flex justify-center ">
                <option value="1">All</option>
                <option value="2">None</option>
                <option value="3">Read</option>
                <option value="4">Unread</option>
                <option value="5">Starred</option>
                <option value="6">UnStarred</option>
              </select>
            </span>
          </div>
          <div className="w-[35px] h-[35px] cursor-pointer hover:bg-[#d1d1d156]  flex items-center justify-center rounded-full">
            <TbReload />
          </div>
          <div className="w-[35px] h-[35px] cursor-pointer hover:bg-[#d1d1d156]  flex items-center justify-center rounded-full">
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className="flex">
          <div className=" hover:bg-[#d1d1d156] cursor-pointer text-gray-500 rounded-sm mr-3 text-sm p-2 flex items-center">
            1-50 of 10,978
          </div>
          <div className="flex">
            <div className="w-[35px] hover:bg-[#d1d1d156] cursor-pointer h-[35px]  flex items-center mx-2 justify-center rounded-full">
              <IoIosArrowBack />
            </div>
            <div className="w-[35px] hover:bg-[#d1d1d156] cursor-pointer h-[35px]  flex items-center justify-center rounded-full">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* == */}
      </div>
      <div>
        <div className="flex h-[60px] items-center cursor-pointer">
          <div className="w-[25%] flex items-center pl-4 h-full  hover:bg-[#d1d1d156] border-b-3 border-blue-400">
            <RiInboxFill className="text-blue-400 md:text-[15px]" />{" "}
            <span className="pl-4 text-blue-400 md:text-[15px]">Primary</span>
          </div>
          <div className="w-[25%] flex items-center pl-4 h-full hover:bg-[#d1d1d156]">
            <LuTag className="md:text-[15px]" />{" "}
            <span className="pl-4 md:text-[15px]">Promotions</span>
          </div>
          <div className="w-[25%] flex items-center pl-4 h-full hover:bg-[#d1d1d156]">
            <GoPeople className="md:text-[15px]" />{" "}
            <span className="pl-4 md:text-[15px]">Social</span>
          </div>
          <div className="w-[25%] flex items-center pl-4 h-full hover:bg-[#d1d1d156]">
            <RiSpam2Line className="md:text-[15px]" />{" "}
            <span className="pl-4 md:text-[15px]">Updates</span>
          </div>
        </div>
        <div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <Column tasks={tasks} />
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Emails;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IoMdStarOutline } from "react-icons/io";

interface EamilType {
  id: number;
  title: string;
  subject: string;
}

const Email = ({ id, title, subject }: EamilType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex touch-none  p-1 hover:shadow-md cursor-pointer hover:border-gray-200 hover:border "
    >
      <div className="flex  w-full">
        <div className="flex  mr-[100px] w-[300px] items-center">
          <input
            type="checkbox"
            className="mx-2  lg:h-3.5 lg:w-3.5 md:h-[12px] md:w-[12px] border-2 border-gray-300 rounded-xs bg-white"
          />
          <IoMdStarOutline className="mx-2 text-gray-400" />
          <p className="text-[14px] font-semibold ml-2 lg:text-[14px] md:text-[12px]">
            {title}
          </p>
        </div>
        <div className=" w-full flex justify-between">
          <div className=" ">
            <p className="text-[14px] font-semibold lg:text-[14px] md:text-[12px]">
              {subject}
            </p>
          </div>
          <div>
            <p className="md:text-[10px] lg:text-[14px]">12:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;

{
  /* <IoStarSharp className="text-amber-400" /> */
}

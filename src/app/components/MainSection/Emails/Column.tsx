/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import Email from "./Email";

const Column = ({ tasks }) => {
  return (
    <div className="flex flex-col overflow-x-scroll h-screen">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((data, i) => (
          <Email
            id={data.id}
            title={data.title}
            subject={data.subject}
            key={data.id}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;

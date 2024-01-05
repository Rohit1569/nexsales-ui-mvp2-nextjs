import React from "react";
import Image from "next/image";

import DynamicTable from "@/components/DynamicTable";
import PaginationComponent from "@/components/PaginationComponent";

const tamFilterTable = [
  {
    SavedFilterName: {
      imageUrl: "/check.svg",
      text: "Nexsales-SAM Dashboard",
    },
    Date: "Aug 13, 2023 15:00",
  },
  {
    SavedFilterName: {
      imageUrl: "/uncheck.svg",
      text: "Nexsales-TAM Dashboard",
    },
    Date: "Aug 13, 2023 15:00",
  },
];

const columnWidths = {
  AppointmentModule: 700,
  SavedFilterName: 600,
  Users: 600,
  Title: 600,
};

function Step4() {
  return (
    <>
      <div className="bg-[#FFFFFF] height-[800px] w-[800px] rounded-lg">
        <div className="flex  self-stretch items-center bg-[#F7FCFD]  gap-1 rounded-lg">
          <div className="pt-[20px] pb-[19px] pl-[24px]">
            <h1 className="text-lg not-italic font-medium leading-7 "></h1>
          </div>
          <div className="items-center"></div>
        </div>

        <div className="flex pt-[20px] pr-[24px] pb-[19px] pl-[24px] gap-[16px] self-stretch items-center shrink-0 flex-grow bg-white justify-between">
          <div className="flex gap-2">
            <div className="items-center"></div>
            <div className="w-auto h-auto">
              <h2 className="text-sm not-italic font-medium leading-5 text-[#F79009]">
                Company
              </h2>
            </div>
          </div>

          <div>
            <div className="flex items-start flex-row-t w-[302px] h-auto gap-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[16px] self-stretch">
              <div className=" ">
                <h2 className=" text-[#667085]"></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-[12px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch">
          <div className="flex gap-2 text-[#FFF] bg-[#20276F] text-sm not-italic leading-5 font-semibold rounded-lg justify-center items-center "></div>
        </div>
      </div>
    </>
  );
}

export default Step4;

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

function Step1() {
  return (
    <>
      <div className="bg-[#FFFFFF]  w-[800px] rounded-lg">
        <div className="flex  self-stretch items-center bg-[#F7FCFD]  gap-1 rounded-lg">
          <div className="pt-[20px] pb-[19px] pl-[24px]">
            <h1 className="text-lg not-italic font-medium leading-7 ">
              Nexsales - Clone your customers
            </h1>
          </div>
          <div className="items-center">
            <Image src="/edit-3.svg" alt="me" width="19" height="19" />
          </div>
        </div>

        <div className="flex pt-[20px] pr-[24px] pb-[19px] pl-[24px] gap-[16px] self-stretch items-center shrink-0 flex-grow bg-white justify-between">
          <div className="flex gap-2">
            <div className="items-center">
              <Image src="/Group.svg" alt="me" width="19" height="19" />
            </div>
            <div className="w-auto h-auto">
              <h2 className="text-sm not-italic font-medium leading-5 text-[#F79009]">
                Select a saved filter to proceed
              </h2>
            </div>
          </div>

          <div>
            <div className="flex items-start flex-row border-l border-r border-b border-t w-[302px] h-auto gap-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[16px] self-stretch">
              <div className="items-center ">
                <Image src="/search.svg" alt="me" width="20" height="20" />
              </div>
              <div className=" ">
                <h2 className="flex-1 flex-shrink-0 flex-basis-0  font-normal text-base text-[#667085]">
                  Nexsales - TAM Dashboard
                </h2>
              </div>
            </div>
          </div>
        </div>
        <DynamicTable
          data={tamFilterTable}
          columnWidths={columnWidths}
          style={{ marginTop: 0 }}
          buttonColumnName
          externalButtonColumnName
        />
        <div className="flex pt-[12px] pr-[24px] pb-[16px] pl-[24px] justify-between items-center self-stretch">
          <div>
            <PaginationComponent />
          </div>
          <div className="flex gap-2 text-[#FFF] bg-[#20276F] text-sm not-italic leading-5 font-semibold rounded-lg justify-center items-center ">
            <button>
              <svg
                className="w-[85px] h-[36px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="filter drop-shadow-lg">
                  <rect
                    className="fill-primary-800 rounded-md"
                    x="2"
                    y="1"
                    width="85"
                    height="36"
                  />
                  <rect
                    className="stroke-primary-800 rounded-md"
                    x="2.5"
                    y="1.5"
                    width="84"
                    height="35"
                  />
                  <text
                    className="text-white leading-5 text-sm "
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#FFF"
                  >
                    Proceed
                  </text>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;

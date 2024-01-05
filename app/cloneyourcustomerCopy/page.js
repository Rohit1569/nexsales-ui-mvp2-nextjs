import Chips from "@/components/Chips";
import DynamicTable from "@/components/DynamicTable";
import PaginationComponent from "@/components/PaginationComponent";
import Step1 from "@/components/Step1";
import {
  HorizontalLinearStepper,
  StepperComponent,
} from "@/components/Strepper";
import { YourStepperComponent } from "@/components/Strepper2";
import Image from "next/image";
import React from "react";
const book = require("../../public/check.svg");

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

const renderChip = (chip) => (
  <div key={chip.text} className={chip.classes} style={{ color: chip.color }}>
    {chip.imageSrc && (
      <img src={chip.imageSrc} alt={chip.text} className="chip-image" />
    )}
    <span style={{ color: "#175CD3" }}>{chip.text}</span>
  </div>
);

const chipData = [
  {
    text: "Current",
    classes:
      "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#EFF8FF] text-[#175CD3]",
    color: "#EFF8FF",
  },
  // Add more chip objects if needed
];

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
];

function cloneyourcustomer() {
  return (
    <>
      <div className="h-[800px] w-full  m-0 p-0 ">
        <div
          style={{ backgroundColor: "#F7FCFD" }}
          className="  ml-[60px] mt-[-410px] z-1 flex justify-center align-middle p-[10px]"
        >
          <div className="h-auto w-full pt-[28px] pb-[48px] ">
            <div className="flex flex-col gap-6 self-stretch ">
              <div className="">
                <h1 className="font-inter text-3xl font-medium  items-left ml-[30px]  ">
                  Select Filter
                </h1>
              </div>
              <div className="flex pt-[3px]  gap-2 self-stretch items-center justify-center bg-[#F7FCFD]">
                <div className="bg-[#F7FCFD] h-[48px] w-[286px] p-[12px] gap-4 flex flex-col flex-start border-r">
                  <div className="flex">
                    <div>
                      <h2 className="text-base leading-6 font-semibold not-italic">
                        Step 1
                      </h2>
                      <div className="leading-5">
                        <h2 className="text-[#667085] text-sm font-normal not-italic leading-5 ">
                          Select Filter
                        </h2>
                      </div>
                    </div>
                    <div>
                      <Chips chipData={chipData} renderChip={renderChip} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7FCFD] h-[48px] w-[286px] p-[12px] gap-4 flex flex-col flex-start border-r">
                  <div className="">
                    <h2 className="text-base leading-6 font-semibold not-italic">
                      Step 2
                    </h2>
                    <div className="leading-5">
                      <h2 className="text-[#667085] text-sm font-normal not-italic leading-5 ">
                        Upload your List
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7FCFD] h-[48px] w-[286px] p-[12px] gap-4 flex flex-col flex-start border-r">
                  <div className="">
                    <h2 className="text-base leading-6 font-semibold not-italic">
                      Step 3
                    </h2>
                    <div className="leading-5">
                      <h2 className="text-[#667085] text-sm font-normal not-italic leading-5 ">
                        Header Mapping
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7FCFD] h-[48px] w-[286px] p-[12px] gap-4 flex flex-col flex-start">
                  <div className="">
                    <h2 className="text-base leading-6 font-semibold not-italic">
                      Step 4
                    </h2>
                    <div className="leading-5">
                      <h2 className="text-[#667085] text-sm font-normal not-italic leading-5 ">
                        File Status
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  m-0 p-0 ">
        <div
          style={{
            backgroundImage: 'url("/background.svg")',
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
          className=" shadow-xl ml-[60px] mt-[-700px] z-1 flex justify-center item-center p-[10px] py-[50px]"
        >
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
          <Step1 />
        </div>
      </div>
    </>
  );
}

export default cloneyourcustomer;

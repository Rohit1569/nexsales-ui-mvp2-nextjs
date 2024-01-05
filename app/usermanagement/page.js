import DynamicTable from "@/components/DynamicTable";
import React from "react";
import Image from "next/image";
import Table from "@/components/Table";

// const tamSampleFilterTable = [
//   {
//     FilterName: "Nexsales-TAM Dashboard",
//     RequestDateAndTime: "Aug 13, 2023 15:00",
//     ActionStage: [
//       {
//         text: "Assgined",
//         imageSrc: "/green.svg",
//         classes:
//           "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#ECFDF3] text-[#027A48])",
//         color: "#027A48",
//       },
//     ],
//     RequestStatus: [
//       {
//         text: "Pending",
//         imageSrc: "/grey.svg",
//         classes:
//           "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#F2F4F7] text-027A48)",
//         color: "#344054",
//       },
//     ],
//     AssignTo: {
//       text: "RV",
//       classes:
//         "bg-[#E6F5F8] text-white w-[4px] h-[40px] p-[8px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
//       color: "#20276F",
//     },

//     Remark: "Random",
//     " ": "",
//   },
//   {
//     FilterName: "Nexsales-TAM Dashboard",
//     RequestDateAndTime: "Aug 13, 2023 15:00",
//     ActionStage: [
//       {
//         text: "Rejected",
//         imageSrc: "/_Dot.svg",
//         classes:
//           "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#FEF3F2] text-027A48)",
//         color: "#B42318",
//       },
//     ],
//     RequestStatus: [
//       {
//         text: "Completed",
//         imageSrc: "/green.svg",
//         classes:
//           "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#ECFDF3] text-027A48)",
//         color: "#027A48",
//       },
//     ],
//     AssignTo: {
//       text: "RV",
//       classes:
//         "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
//       color: "#20276F",
//     },
//     Remark: "Random",
//     " ": "",
//   },
// ];

const tamSampleFilterTable = [
  {
    Name: {
      text: "RV",
      classes:
        "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50 flex items-center justify-center",
      color: "#20276F",
      name: "Rohit Verma", // Add the "Name" property
      email: "rohitverma1569@gmail.com", // Add the email property if needed
    },

    OrgRole: "",
    Database: "",
    Access: "",
  },
  {
    Name: {
      text: "AP",
      classes:
        "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50 flex items-center justify-center",
      color: "#20276F",
      name: "Akshay Pawar",
      email: "akshaypawar1231@gmail.com",
    },

    OrgRole: "",
    Database: "",
    Access: "",
  },
  {
    Name: {
      text: "OR",
      classes:
        "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50 flex items-center justify-center",
      color: "#20276F",
      name: "Om Rane", // Add the "Name" property
      email: "omrane654@gmail.com", // Add the email property if needed
    },

    OrgRole: "",
    Database: "",
    Access: "",
  },
  {
    Name: {
      text: "CF",
      classes:
        "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50 flex items-center justify-center",
      color: "#20276F",
      name: "Caleb Felix", // Add the "Name" property
      email: "calebfelix59@gmail.com", // Add the email property if needed
    },

    OrgRole: "",
    Database: "",
    Access: "",
  },
  {
    Name: {
      text: "NS",
      classes:
        "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50 flex items-center justify-center",
      color: "#20276F",
      name: "Nilesh Suvarna", // Add the "Name" property
      email: "Nilesh.survarna@nexsales.org", // Add the email property if needed
    },

    OrgRole: "",
    Database: "",
    Access: "",
  },
];

const columnWidths = {
  Name: 900,
};

export default function page() {
  return (
    <>
      <div className="h-[800px] w-full  m-0 p-0 gap-32">
        <div
          style={{ backgroundColor: "#F7FCFD" }}
          className=" shadow-xl ml-[60px] mt-[-410px] z-1 flex justify-center align-middle p-[10px]"
        >
          <div className="h-full w-full pt-[48px] pb-[48px]">
            <div className="flex justify-between  gap-[16px] self-stretch w-[1280px] h-auto">
              <div className="font-inter text-3xl font-medium ">
                <h1>Members</h1>
              </div>
              <div className="flex gap-2">
                <div className=" bg-white flex items-start flex-row border-l border-r border-b border-t w-[302px] h-auto gap-[8px] pt-[10px] pr-[14px] pb-[10px] pl-[16px] self-stretch">
                  <div className="items-center ">
                    <Image src="/search.svg" alt="me" width="20" height="20" />
                  </div>
                  <div className="">
                    <h2 className="flex-1 flex-shrink-0 flex-basis-0  font-normal text-base text-[#D0D5DD]">
                      Search members
                    </h2>
                  </div>
                </div>
                <div className="items-center ">
                  <Image src="/Button.jpg" alt="me" width="98" height="70" />
                </div>
              </div>
            </div>
            <div className="font-inter text-[#667085] font-normal text-sm leading-6 text-tableHeading">
              <p>Manage members access.</p>
            </div>
            <div>
              <div className="pt-[32px] flex font-inter  text-sm text-tableHeading">
                <button className="p-[2px] hover:border-solid border-blue-800 text-[#20276F]">
                  Existing Members
                </button>
                <button className="p-[2px] hover:border-solid hover:border-blue-800 text-[#667085]">
                  Pending Invitation
                </button>
              </div>
              <div className="pt-[10px]">
                <hr className="hover:border-blue-800"></hr>
              </div>
            </div>

            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <div>
                <h1 className="p-[15px] text-lg font-inter font-[#101828] font-normal">
                  Members
                </h1>
              </div>
              <div class="flex p-2 px-8 justify-center items-center rounded-2xl bg-blue-100">
                <h2 class="text-center text-xs font-inter font-medium text-blue-700">
                  5 members
                </h2>
              </div>
            </div>
            <div className="border-b border-l border-r">
              <Table
                data={tamSampleFilterTable}
                isAdminColumnName
                dataBaseButton
                columnWidths={columnWidths}
                AccessButton
                style={{ marginTop: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

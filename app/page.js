import Card from "@/components/Card";
import DynamicTable from "@/components/DynamicTable";
import Table from "@/components/Table";
import Image from "next/image";

export default function Home() {
  const cardData = [
    { title: "Request Raised", number: 5 },
    { title: "Request Fullfilled", number: 1 },
    { title: "Request Rejected", number: 1 },
    { title: "Work-in-progress", number: 3 },
  ];

  const tableData = [
    {
      Name: "John Doe",
      EmailAddress: {
        url: "mailto:rohit@nexsales.com",
        text: "rohit@nexsales.com",
      },
      CompanyName: "nexsales",
      CompanyWebsite: {
        url: "https://www.nexsales.com/",
        text: "www.nexsales.com",
      },
      Title: "developer",
      Level: "senior developer",
      Department: "IT",
      PhoneNumber: "1234567890",
      UserAccess: "granted",
    },
  ];

  const calendlyDetailTaleData = [
    {
      AppointmentModule: "SAM",
      AppointmentDates: "Aug 13, 2023 15:00",
      Attendees: [
        {
          text: "SK",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
        {
          text: "SM",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
        {
          text: "PL",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
        {
          text: "NS",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
        {
          text: "SB",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
        {
          text: "+2",
          classes:
            "bg-[#E6F5F8] text-white w-[32px] h-[32px] p-[6px] flex-shrink-[0px] rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
          color: "#20276F",
        },
      ],
    },
  ];

  const tamFilterTable = [
    {
      FilterName: "Nexsales-TAM Dashboard",
      DateAndTime: "Aug 13, 2023 15:00",
      " ": "",
      "": "",
    },
    {
      FilterName: "Nexsales-SAM Dashboard",
      DateAndTime: "Aug 13, 2023 15:00",
      " ": "",
      "": "",
    },
  ];

  const tamSampleFilterTable = [
    {
      FilterName: "Nexsales-TAM Dashboard",
      RequestDateAndTime: "Aug 13, 2023 15:00",
      ActionStage: [
        {
          text: "Assgined",
          imageSrc: "/green.svg",
          classes:
            "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#ECFDF3] text-[#027A48])",
          color: "#027A48",
        },
      ],
      RequestStatus: [
        {
          text: "Pending",
          imageSrc: "/grey.svg",
          classes:
            "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#F2F4F7] text-027A48)",
          color: "#344054",
        },
      ],
      AssignTo: {
        text: "RV",
        classes:
          "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
        color: "#20276F",
      },

      Remark: "Random",
      " ": "",
    },
    {
      FilterName: "Nexsales-TAM Dashboard",
      RequestDateAndTime: "Aug 13, 2023 15:00",
      ActionStage: [
        {
          text: "Rejected",
          imageSrc: "/_Dot.svg",
          classes:
            "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#FEF3F2] text-027A48)",
          color: "#B42318",
        },
      ],
      RequestStatus: [
        {
          text: "Completed",
          imageSrc: "/green.svg",
          classes:
            "flex p-[2px] pl-[6px] pr-[8px] justify-center items-center gap-[6px] rounded-2xl bg-[#ECFDF3] text-027A48)",
          color: "#027A48",
        },
      ],
      AssignTo: {
        text: "RV",
        classes:
          "bg-[#E6F5F8] text-white w-[42px] h-[42px] p-[6px] flex-shrink-0 rounded-full border-2 border-white bg-Tertiary-Bright-Cyan-50",
        color: "#20276F",
      },
      Remark: "Random",
      " ": "",
    },
  ];

  const otherUsersFromNexsales = [
    {
      Users: "Milap Shah",
      Title: "CEO",
      Requests: "TAM Sample Account, SAM",
    },
  ];
  const columnWidths = {
    AppointmentModule: 900,
    FilterName: 900,
    Users: 600,
    Title: 600,
  };

  return (
    <>
      <div className="h-[800px] w-full  m-0 p-0 gap-32">
        <div
          style={{ backgroundColor: "#F7FCFD" }}
          className=" shadow-xl ml-[60px] mt-[-410px] z-1 flex justify-center align-middle p-[10px]"
        >
          <div className="h-full w-full pt-[48px] pb-[48px]">
            <div>
              <div className="font-inter text-3xl font-medium mt-[-60px]">
                <h1>Admin Dashboard</h1>
              </div>
              <div className="font-inter text-[#667085] font-normal text-sm leading-6 text-tableHeading">
                <p>
                  Effortlessly Manage, Monitor and Modify: Your control center
                  for seamless oversight and optimization.
                </p>
              </div>
              <div className="pt-[32px] flex font-inter text-sm text-tableHeading">
                <button className="p-[2px] hover:border-solid hover:border-blue-800">
                  Users
                </button>
                <button className="p-[2px] hover:border-solid hover:border-blue-800">
                  Requests
                </button>
              </div>
              <div className="pt-[10px]">
                <hr className="hover:border-blue-800"></hr>
              </div>
            </div>
            <div className="flex self-stretch items-center justify-between rounded-t-lg">
              {cardData.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  number={item.number}
                />
              ))}
            </div>

            <div>
              <div className="flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
                <h1 className="p-[15px] text-xl font-inter font-normal">
                  User Details
                </h1>
              </div>

              <div className="border-b border-l border-r">
                <DynamicTable data={tableData} style={{ marginTop: 0 }} />
              </div>
            </div>

            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <h1 className="p-[15px] text-xl font-inter font-normal">
                Calendly Detail
              </h1>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={calendlyDetailTaleData}
                columnWidths={columnWidths}
                style={{ marginTop: 0 }}
              />
            </div>
            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <div>
                <h1 className="p-[15px] text-xl font-inter font-normal">TAM</h1>
              </div>
              <div class="flex p-2 px-8 justify-center items-center rounded-2xl bg-blue-100">
                <h2 class="text-center text-xs font-inter font-medium text-blue-700">
                  4 Filters
                </h2>
              </div>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={tamFilterTable}
                columnWidths={columnWidths}
                style={{ marginTop: 0 }}
                buttonColumnName
                externalButtonColumnName
              />
            </div>
            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <div>
                <h1 className="p-[15px] text-xl font-inter font-normal">
                  TAM Sample Account
                </h1>
              </div>
              <div class="flex p-2 px-8 justify-center items-center rounded-2xl bg-blue-100">
                <h2 class="text-center text-xs font-inter font-medium text-blue-700">
                  4 Requests
                </h2>
              </div>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={tamSampleFilterTable}
                buttonColumnName
                style={{ marginTop: 0 }}
              />
            </div>
            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <div>
                <h1 className="p-[15px] text-xl font-inter font-normal">SAM</h1>
              </div>
              <div class="flex p-2 px-8 justify-center items-center rounded-2xl bg-blue-100">
                <h2 class="text-center text-xs font-inter font-medium text-blue-700">
                  1 Request
                </h2>
              </div>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={tamSampleFilterTable}
                buttonColumnName
                style={{ marginTop: 0 }}
              />
            </div>
            <div className="h-[60px] flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <div>
                <h1 className="p-[15px] text-xl font-inter font-normal">
                  Clone Your Customer
                </h1>
              </div>
              <div class="flex p-2 px-8 justify-center items-center rounded-2xl bg-blue-100">
                <h2 class="text-center text-xs font-inter font-medium text-blue-700">
                  1 Request
                </h2>
              </div>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={tamSampleFilterTable}
                buttonColumnName
                style={{ marginTop: 0 }}
              />
            </div>
            <div className="flex items-center bg-white mt-[32px] ml-[0px] border-t border-l border-r p-2">
              <h1 className="p-[15px] text-xl font-inter font-normal">
                Other users from Nexsales
              </h1>
            </div>
            <div className="border-b border-l border-r">
              <DynamicTable
                data={otherUsersFromNexsales}
                columnWidths={columnWidths}
                style={{ marginTop: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

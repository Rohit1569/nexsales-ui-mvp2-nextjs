// DynamicTable.js

import React from "react";
import Chips from "./Chips";

const DynamicTable = ({
  data,
  columnWidths,
  buttonColumnName,
  externalButtonColumnName,
}) => {
  const tableStyle = "table-auto w-full";
  const headerCellStyle =
    "px-[20px] bg-[#F7FCFD] h-[44px] gap-[12px] justify-center pt-[12px] pr[24px] text-[#667085] font-Inter font-medium self-stretch leading-10 text-lg not-italic text-left";
  const cellStyle =
    "font-medium px-[20px] bg-white font-Inter text-[#101828] h-[72px] pt-[16px] pr-[24px] self-stretch text-sm leading-5 not-italic self-stretch text-left";

  const formatColumnName = (columnName) => {
    return columnName.replace(/([A-Z])/g, " $1").trim();
  };

  const renderHeader = () => {
    const columnsToDisplay = Object.keys(data[0]);

    return (
      <tr>
        <th className="" />
        {columnsToDisplay.map((columnName) => (
          <th
            key={columnName}
            className={`${headerCellStyle} ... w-${
              columnWidths?.[columnName]
                ? `${columnWidths[columnName]}`
                : "auto"
            }`}
          >
            {formatColumnName(columnName)}
          </th>
        ))}
      </tr>
    );
  };

  const renderBody = () => {
    return data.map((row) => (
      <tr key={row.id}>
        <td className="" />
        {Object.keys(row).map((columnName) => (
          <td
            key={columnName}
            className={`${cellStyle} p-4 m-2`}
            style={{ width: columnWidths?.[columnName] || "auto" }}
          >
            {(() => {
              switch (true) {
                case buttonColumnName && columnName === " ":
                  return (
                    <button>
                      <img src={"/download.svg"} alt="Button" />
                    </button>
                  );
                case externalButtonColumnName && columnName === "":
                  return (
                    <button>
                      <img src={"/external-link.svg"} alt="Button" />
                    </button>
                  );
                case columnName === "Attendees":
                case columnName === "ActionStage":
                case columnName === "RequestStatus":
                  return (
                    <Chips chipData={row[columnName]} renderChip={renderChip} />
                  );
                case columnName === "AssignTo":
                  return (
                    <>
                      <Chips
                        chipData={row[columnName]}
                        renderChip={renderChip}
                      />
                      <h2 className="">Rohit verma</h2>
                      <h3 className="text-[#667085]">
                        rohitverma1569@gmail.com
                      </h3>
                    </>
                  );
                case isValidLink(row[columnName]):
                  return (
                    <a href={row[columnName].url} className="underline">
                      {row[columnName].text}
                    </a>
                  );
                default:
                  return row[columnName];
              }
            })()}
          </td>
        ))}
      </tr>
    ));
  };

  const isValidLink = (value) => {
    return (
      value && typeof value === "object" && "url" in value && "text" in value
    );
  };

  const renderChip = (chip) => (
    <div key={chip.text} className={chip.classes} style={{ color: chip.color }}>
      {chip.imageSrc && (
        <img src={chip.imageSrc} alt={chip.text} className="chip-image" />
      )}
      <span>{chip.text}</span>
    </div>
  );

  return (
    <div className="flex items-center self-stretch justify-center">
      <table className={tableStyle}>
        <thead>{renderHeader()}</thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default DynamicTable;

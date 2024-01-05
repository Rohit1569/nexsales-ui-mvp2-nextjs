import React from "react";
import Chips from "./Chips";
import DropdownButton from "./DropDownButton";
import DatabaseButton from "./DatabaseButton";
import LoadingButtonsTransition from "./ToggleButton";

const DynamicTable = ({
  data,
  columnWidths,
  buttonColumnName,
  externalButtonColumnName,
  isAdminColumnName,
  dataBaseButton,
  AccessButton,
}) => {
  // Define your styling and constants
  const tableStyle = "table-auto w-full";
  const headerCellStyle =
    "px-[20px] bg-[#F7FCFD] h-[44px] gap-[12px] justify-center pt-[12px] pr[24px] text-[#667085] font-Inter font-medium self-stretch leading-10 text-lg not-italic text-left";
  const cellStyle =
    "font-medium px-[20px] bg-white font-Inter text-[#101828] h-[72px] pt-[16px] pr-[24px] self-stretch text-sm leading-5 not-italic self-stretch text-left";

  // Function to format column names (adjust as needed)
  const formatColumnName = (columnName) => {
    return columnName.replace(/([A-Z])/g, " $1").trim();
  };

  // Function to check if a value is a valid link
  const isValidLink = (value) => {
    return (
      value && typeof value === "object" && "url" in value && "text" in value
    );
  };

  // Function to render a chip
  const renderChip = (chip) => (
    <div key={chip.text} className={chip.classes} style={{ color: chip.color }}>
      {chip.imageSrc && (
        <img src={chip.imageSrc} alt={chip.text} className="chip-image" />
      )}
      <span>{chip.text}</span>
    </div>
  );

  // Function to render the content of a cell dynamically based on column name and value
  const renderCellContent = (columnName, columnValue) => {
    switch (true) {
      case buttonColumnName && columnName === " ":
        return (
          <button>
            <img src={"/download.svg"} alt="Button" />
          </button>
        );
      case isAdminColumnName && columnName === "OrgRole":
        return <DropdownButton />;
      case dataBaseButton && columnName === "Database":
        return <DatabaseButton />;
      case AccessButton && columnName === "Access":
        return <LoadingButtonsTransition />;
      case externalButtonColumnName && columnName === "":
        return (
          <button>
            <img src={"/external-link.svg"} alt="Button" />
          </button>
        );
      case columnName === "Attendees":
      case columnName === "ActionStage":
      case columnName === "RequestStatus":
      case columnName === "UserAccess":
        return <Chips chipData={columnValue} renderChip={renderChip} />;
      case columnName === "AssignTo":
        return renderAssignToNameCell(columnValue);
      case columnName === "SavedFilterName":
        return (
          <div className="flex items-center">
            <img
              src={columnValue.imageUrl}
              alt={columnValue.altText}
              className="filter-image"
            />
            <span className="ml-2">{columnValue.text}</span>
          </div>
        );
      case isValidLink(columnValue):
        return (
          <a href={columnValue.url} className="underline">
            {columnValue.text}
          </a>
        );
      default:
        return columnValue;
    }
  };

  // Function to render the 'AssignTo' or 'Name' cell content
  const renderAssignToNameCell = (columnValue) => (
    <div className="flex">
      <div>
        <Chips chipData={columnValue} renderChip={renderChip} />
      </div>
      <div>
        <h2 className="">{columnValue.name}</h2>
        <h3 className="text-[#667085]">{columnValue.email}</h3>
      </div>
    </div>
  );

  // Function to render the header of the table
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
            style={{
              fontSize:
                columnName === "SavedFilterName" || columnName === "Date"
                  ? "14px" // Adjust the font size as needed
                  : "inherit",
            }}
          >
            {formatColumnName(columnName)}
          </th>
        ))}
      </tr>
    );
  };

  // Function to render the body of the table
  const renderBody = () => {
    return data.map((row) => (
      <tr key={row.id}>
        <td className="" />
        {Object.keys(row).map((columnName) => (
          <td
            key={columnName}
            className={`${cellStyle} p-4 m-2`}
            style={{
              width: columnWidths?.[columnName] || "auto",
              color: columnName === "Date" ? "#667085" : null,
            }}
          >
            {renderCellContent(columnName, row[columnName])}
          </td>
        ))}
      </tr>
    ));
  };

  // Return the final JSX for the DynamicTable component
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

// Table.js
import Image from "next/image";

import Chips from "./Chips";

export default function TableForMembers() {
  const data = [
    {
      name: [
        {
          chipData: {
            text: "Chip 1",
            classes: "bg-blue-500 text-white",
            color: "chip-color",
            imageSrc: "Button.jpg",
          },
          email: "email1@example.com",
          image: "",
        },
        {
          chipData: {
            text: "Chip 2",
            classes: "bg-green-500 text-white",
            color: "chip-color",
            imageSrc: "",
          },
          email: "email2@example.com",
          image: "",
        },
        // Add more chips...
      ],
      orgRole: "Role 1",
      database: "Database 1",
      access: "Access 1",
    },
    // Add more items here...
  ];

  const renderChip = (chip) => (
    <div
      key={chip.text}
      className={`flex items-center ${chip.classes}`}
      style={{ color: chip.color }}
    >
      {chip.imageSrc && (
        <img src={chip.imageSrc} alt={chip.text} className="chip-image mr-2" />
      )}
      <div className="chip-text">{chip.text}</div>
      <div className="chip-email">{chip.email}</div>
      <div className="chip-image">
        <img src={chip.image} alt={chip.email} className="user-image" />
      </div>
    </div>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Org Role</th>
          <th>Database</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              {item.name.map((nameItem, nameIndex) => (
                <div key={nameIndex}>
                  <Chips chipData={nameItem.chipData} renderChip={renderChip} />
                </div>
              ))}
            </td>
            <td>
              <button>
                <Image
                  src="/path/to/your/image.jpg"
                  alt="Button Image"
                  width={500}
                  height={300}
                />
                {item.orgRole}
              </button>
            </td>
            <td>{item.database}</td>
            <td>{item.access}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

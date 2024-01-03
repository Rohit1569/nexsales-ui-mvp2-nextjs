// Chips.js
import React from "react";

const Chips = ({ chipData, renderChip }) => {
  const chipsArray = Array.isArray(chipData) ? chipData : [chipData];
  return <div className="flex gap-0">{chipsArray.map(renderChip)}</div>;
};

export default Chips;

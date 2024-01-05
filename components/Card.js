// Card.js
import React from "react";

const Card = ({ title, number }) => (
  <div className="h-[155px] w-[286px] border-[1px] rounded-t-lg bg-white mt-[14px] gap-5">
    <div className="text-center px-[32px] py-[24px]">
      <h3 className="font-inter font-medium text-[#475467] pt-6 text-md leading-6">
        {title}
      </h3>
      <div className="pt-[12px] text-center font-inter font-semibold text-3xl text-[#101828] ">
        {/* Add margin-top (mt-2) to create a gap */}
        <p className="text-4xl font-bold">{number}</p>
      </div>
    </div>
    <div className={`bg-[#6C8B9F] h-[10px] w-full rounded-b-lg `}></div>
  </div>
);

export default Card;

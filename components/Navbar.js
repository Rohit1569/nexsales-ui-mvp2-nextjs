import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-[60px] justify-center   ">
        <div className="w-[92%] h-full justify-between p-[5px]">
          <div className="h-5">
            <div className=" ">
              <Image src="/nexsales.jpg" alt="me" width="150" height="40" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

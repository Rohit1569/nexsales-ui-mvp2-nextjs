import React from "react";
import Image from "next/image";

const SideNavbar = ({ images }) => {
  return (
    <div className="flex flex-col justify-center pt-[72px] pl-[0px] pr[0px] pb-[136px] w-[80px] h-[428px]">
      <div className="h-[6]">
        {images.map((image, index) => (
          <div key={index} className="p-[15px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;

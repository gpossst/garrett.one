import React from "react";
import Image from "next/image";

type PhotographyWidgetTypes = {
  image: string;
  title: string;
  date: string;
};

function PhotographyWidget({ image, title, date }: PhotographyWidgetTypes) {
  return (
    <div
      className=" p-2 w-1/2 rounded-3xl"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}
    >
      <div className="bg-[#2b2b2b] w-full rounded-3xl p-2 border-[#83c5be] border-[1px]">
        <div className=" flex  mx-auto mb-2 items-center justify-between px-2">
          <div className="font-ab_font text-lg">{title}</div>
          <div className="font-inter_font font-semibold text-sm">{date}</div>
        </div>
        <div className="w-full mx-auto">
          <Image
            className="rounded-3xl"
            src={`https://i.imgur.com/${image}.jpeg`}
            alt={title}
            width={500} // Set a large width
            height={250} // Set a height for aspect ratio
            layout="responsive" // Ensures the image scales responsively
            objectFit="cover" // Ensures the image covers the width while keeping aspect ratio
          />
        </div>
      </div>
    </div>
  );
}

export default PhotographyWidget;

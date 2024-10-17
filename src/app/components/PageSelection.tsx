import React from "react";
import Image from "next/image";

function PageSelection({
  selection,
  setSelection,
}: {
  selection: string;
  setSelection: (selection: string) => void;
}) {
  const options = ["Code", "Photography", "Links"];

  return (
    <div className="fixed z-50 bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <div
        className="flex rounded-md p-2 gap-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }} // 75% opacity black background
      >
        <div
          onClick={() => setSelection("Home")}
          className="flex p-2 bg-[#171717] rounded-md cursor-pointer text-[#aeaeae] items-center"
        >
          <Image src={"/gp_logo.png"} alt="Logo" width={40} height={40} />
        </div>
        <div className="flex p-1 bg-[#2b2b2b] rounded-md gap-2">
          <div className="flex gap-2 items-center">
            {options.map((item, index) => (
              <div
                key={index}
                className={`p-2 bg-[#2b2b2b] border-[1px] rounded-md font-inter_font font-semibold cursor-pointer hover:border-[#aeaeae] transition-all
                  ${
                    selection === item
                      ? "border-[#83c5be] text-[#83c5be]"
                      : "border-[#575757] text-[#aeaeae]"
                  }`}
                onClick={() => setSelection(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSelection;

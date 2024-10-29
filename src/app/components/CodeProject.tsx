import React from "react";

type CodeProjectType = {
  title: string;
  background: string;
  link: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

function CodeProject({
  title,
  background,
  link,
  isHovered,
  isOtherHovered,
  handleMouseEnter,
  handleMouseLeave,
}: CodeProjectType) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div
      className={`flex-1 transition-all duration-300 text-white my-4 mx-2 rounded-xl relative cursor-pointer ${
        isHovered ? "flex-[10]" : "flex-1"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleClick();
      }}
    >
      {/* Background image with fade effect */}
      <div
        className={`absolute inset-0 m-4 transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url(${background})`,
            borderRadius: isHovered ? "0.75rem" : "0",
          }}
        />
      </div>

      {/* Title when other item is hovered */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isOtherHovered ? "opacity-50" : "opacity-0"
        }`}
      >
        <h2 className="p-4 rotate-90 h-full">{title}</h2>
      </div>

      {/* Default state title */}
      <div
        className={`absolute font-ab_font text-3xl inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
          !isHovered && !isOtherHovered
            ? "opacity-100"
            : isOtherHovered
            ? "opacity-50"
            : "opacity-0"
        }`}
      >
        <h2 className="transform rotate-90">{title}</h2>
      </div>
    </div>
  );
}

export default CodeProject;

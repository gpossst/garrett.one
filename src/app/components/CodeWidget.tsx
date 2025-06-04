"use client";
import React, { useState } from "react";
import CodeProject from "./CodeProject";

function CodeWidget() {
  // State to track which component (if any) is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sample data array with titles
  const data = [
    {
      title: "Clariphoto",
      background: "https://i.imgur.com/G4krjcL.png",
      link: "https://apps.apple.com/us/app/clariphoto/id6479256585",
    },
    {
      title: "PlaylistTransfers",
      background: "https://i.imgur.com/WcguPjH.png",
      link: "https://www.playlisttransfers.app/",
    },
    {
      title: "Reformify",
      background: "https://i.imgur.com/9kQ5Iln.png",
      link: "https://reformify.com/",
    },
  ];

  return (
    <div className="flex h-screen">
      {data.map((item, index) => (
        <CodeProject
          key={index}
          title={item.title}
          link={item.link}
          background={item.background}
          isHovered={hoveredIndex === index} // Is this component being hovered?
          isOtherHovered={hoveredIndex !== null && hoveredIndex !== index} // Is another component hovered?
          handleMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
          handleMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
        />
      ))}
    </div>
  );
}

export default CodeWidget;

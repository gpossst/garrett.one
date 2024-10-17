import React, { useEffect, useState } from "react";
import PhotographyWidget from "./PhotographyWidget";

function PhotographyPage() {
  const imageData = [
    {
      image: "cV7oSLf",
      title: "Hanging Rock Raptor Observatory, Union, WV",
      date: "10/12/2024",
    },
    {
      image: "0ix03xb",
      title: "Creek Street, Ketchikan, AK",
      date: "8/17/2024",
    },
    {
      image: "2UgvIr7",
      title: "Main Street, Tazewell, VA",
      date: "6/9/2024",
    },
    {
      image: "FQIcBwv",
      title: "Hanging Rock Raptor Observatory, Union, WV",
      date: "10/12/2024",
    },
    {
      image: "gjhE4sO",
      title: "York River, King and Queen, VA",
      date: "12/28/2023",
    },
    {
      image: "iXWGFIl",
      title: "Mendenhall Glacier, Juneau, AK",
      date: "8/15/2023",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url('https://i.imgur.com/QvQje0N.jpeg')`,
    backgroundPositionY: `${scrollY * 0.5}px`, // Adjust scrolling speed here (0.5 for slower background scroll)
  };

  return (
    <div
      className="w-full h-full min-h-screen bg-cover bg-center"
      style={parallaxStyle}
    >
      <div className="pt-8 pb-16 flex flex-col items-center gap-4">
        {imageData.map((data, index) => (
          <PhotographyWidget
            key={index}
            image={data.image}
            title={data.title}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotographyPage;

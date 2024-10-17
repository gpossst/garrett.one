import React from "react";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.imgur.com/veqz4kN.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex", // Center content
        justifyContent: "center",
        alignItems: "center",
        color: "white", // To contrast with the background
      }}
    >
      <div className="font-ab_font text-[#006d77] text-3xl">garrett post</div>
    </div>
  );
}

export default HomePage;

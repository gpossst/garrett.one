import React from "react";
import CodeWidget from "./CodeWidget";

function CodePage() {
  return (
    <div
      className="w-full h-full bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('/C1.png')` }}
    >
      <CodeWidget />
    </div>
  );
}

export default CodePage;

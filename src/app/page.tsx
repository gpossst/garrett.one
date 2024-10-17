"use client";
import CursorFollower from "@/app/components/CursorComponent.jsx";
import React, { useState, useEffect } from "react";
import PageSelection from "./components/PageSelection";
import HomePage from "./components/HomePage";
import CodePage from "./components/CodePage";
import PhotographyPage from "./components/PhotographyPage";
import LinksPage from "./components/LinksPage";

export default function Home() {
  const [selected, setSelected] = useState("Home");
  const [currentPage, setCurrentPage] = useState("Home");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (selected !== currentPage) {
      // Trigger fade-out
      setIsFading(true);
      const timeout = setTimeout(() => {
        // After fade-out, change the page
        setCurrentPage(selected);
        setIsFading(false); // Fade back in
      }, 1500); // 1500ms fade duration

      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [selected, currentPage]);

  const renderPage = () => {
    if (currentPage === "Home") return <HomePage />;
    if (currentPage === "Code") return <CodePage />;
    if (currentPage === "Photography") return <PhotographyPage />;
    if (currentPage === "Links") return <LinksPage />;
  };

  return (
    <div>
      <main>
        <CursorFollower />
        <div className="w-full h-full">
          <PageSelection selection={selected} setSelection={setSelected} />
          <div
            className={`transition-opacity duration-1000 h-full ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
}

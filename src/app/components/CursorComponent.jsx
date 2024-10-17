"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorCircle = () => {
  const circleRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Animate circle position with GSAP
      gsap.to(circleRef.current, {
        x: clientX - (isPointer ? 15 : 50),
        y: clientY - (isPointer ? 15 : 50),
        duration: 0.2,
        ease: "power3.out",
      });

      const elementUnderCursor = document.elementFromPoint(clientX, clientY);
      const cursorStyle = window.getComputedStyle(elementUnderCursor).cursor;

      // Set pointer state if hovering over a pointer element
      setIsPointer(cursorStyle === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isPointer]);

  useEffect(() => {
    gsap.to(circleRef.current, {
      width: isPointer ? 50 : 100,
      height: isPointer ? 50 : 100,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [isPointer]);

  return (
    <div
      ref={circleRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "white",
        opacity: "75%", // Adjust for stronger effect
        pointerEvents: "none", // No interaction blocking
        zIndex: 9999,
        mixBlendMode: "difference", // Main technique for inversion
      }}
    ></div>
  );
};

export default CursorCircle;

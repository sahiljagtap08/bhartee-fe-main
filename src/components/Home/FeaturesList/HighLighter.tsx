"use client";
import { useEffect, useRef } from "react";

const Highlighter = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);
  const boxesRef = useRef([]);

  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });

  const initContainer = () => {
    const containerElement = containerRef.current as any;
    containerSize.current.w = containerElement?.offsetWidth;
    containerSize.current.h = containerElement.offsetHeight;
  };

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    const containerElement = containerRef.current as any;
    const rect = containerElement.getBoundingClientRect();
    const { w, h } = containerSize.current;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    containerElement.style.setProperty("--mouse-x", `${x}px`);
    containerElement.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initContainer);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Render your child elements or boxes here */}
      {children}
    </div>
  );
};

export default Highlighter;

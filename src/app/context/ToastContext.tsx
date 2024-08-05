"use client";
import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <div className="static z-[99999]">
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ToasterContext;

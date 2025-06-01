import React from "react";
import { FaHandPointer } from "react-icons/fa";

const GotoTop = () => {
  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div onClick={goToBtn} className="right-10 bottom-5 fixed z-[999]">
      <button className="bg-blue-600 text-white w-[70px] h-[70px] rounded-full inline-flex justify-center items-center shadow-xl"><FaHandPointer size={24} /></button>
    </div>
  );
};

export default GotoTop;

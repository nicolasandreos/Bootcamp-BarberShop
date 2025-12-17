"use client";

import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 z-20 text-black text-xl p-3.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
        <IoIosArrowBack />
    </button>
  );
}
export default BackButton;
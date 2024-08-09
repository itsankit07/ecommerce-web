import React from "react";
import useTimer from "../utils/hooks/useTimer";

const BestDealHomePage = () => {
  const timer = useTimer();

  return (
    <div className="max-w-6xl h-[31.25rem] bg-black mt-[8.75rem] mb-[8.75rem] mx-auto flex flex-row justify-between">
      <div className="flex flex-col justify-evenly ml-10 w-6/12">
        <p className="text-[#00FF66] font-poppin">Categories</p>
        <h1 className="font-inter text-white text-5xl font-semibold">
          Enhance Your Music Experience
        </h1>
        <div className="flex flex-row gap-6 mt-8">
          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
              {String(timer.hours).padStart(2, "0")}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Hours
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
              {String(timer.days).padStart(2, "0")}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Days
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
              {String(timer.minutes).padStart(2, "0")}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Minutes
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
              {String(timer.seconds).padStart(2, "0")}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Second
            </p>
          </div>
        </div>
        <button className="w-[171px] h-[56px]font-poppin bg-[#00FF66] text-white px-10 py-4 rounded">
          Buy Now
        </button>
      </div>
      <div className="relative w-6/12 my-auto mr-10">
        <div className="absolute inset-0 bg-[#8d8d8d]  blur-[80px] rounded-full z-0"></div>
        <img className="relative z-10" src="/JBL_BOOMBOX_2.png" alt="" />
      </div>
    </div>
  );
};

export default BestDealHomePage;

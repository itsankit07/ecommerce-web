import imagesList from "../../utils/SliderImages";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

const HomepageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? imagesList.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === imagesList.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  return (
    <div className="relative w-9/12 h-[21.5em] bg-black mt-10 group ">
      <div className="absolute w-5/12 left-16 top-[3.625em] flex flex-row items-center gap-5">
        <img className="h-[3.0625em]" src="/Applelogo.png" alt="" />
        <p className="text-white py-[0.9063em]">iPhone 14 Series</p>
      </div>
      <div className="text-white w-5/12 tracking-wide font-inter text-5xl font-bold absolute left-16 top-[127px] flex flex-col gap-2">
        <h1>Up to 10%</h1>
        <h1>off Voucher</h1>
      </div>
      <div className="absolute w-5/12 left-16 top-[269px]">
        <p className="text-white font-poppin text-lg">Shop Now</p>
      </div>

      <img
        className="absolute w-6/12 h-[20.375em]  left-[23.75em] duration-300"
        src={imagesList[currentIndex].url}
        alt=""
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-0 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-0 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute left-[446px] top-[310px] bg-red-100 text-white border-white border-2">
        <RxDotFilled />
      </div>
    </div>
  );
};

export default HomepageSlider;

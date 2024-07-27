import { useState } from "react";
import imagesList from "../utils/SliderImages";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const HomePage = () => {
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
    <div className="flex flex-row justify-evenly mb-[140px]">
      <aside className="mt-10">
        <ul className="flex flex-col gap-4">
          <li>Woman’s Fashion &gt;</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>
      <div className="w-[892px] h-[344px] bg-black mt-10 border-black border-2 relative group">
        <div className="absolute left-16 top-[58px] flex flex-row justify-between items-center gap-5">
          <img className="w-10 h-[49px]" src="/Applelogo.png" alt="" />
          <p className="text-white py-[14.5px]">iPhone 14 Series</p>
        </div>
        <div className="text-white tracking-wide font-inter w-[294px] text-5xl font-bold absolute left-16 top-[127px] flex flex-col gap-2">
          <h1>Up to 10%</h1>
          <h1>off Voucher</h1>
        </div>
        <div className="absolute left-16 top-[269px]">
          <p className="text-white font-poppin text-lg">Shop Now</p>
        </div>

        <img
          className="w-[496px] h-[342px] absolute left-[393px] duration-300"
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
          {/* {imagesList.map((list, listIndex) => {
            <div>
              <RxDotFilled />
            </div>;
          })} */}
          <RxDotFilled />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import axios from "axios";
import { useState, useEffect } from "react";
import imagesList from "../utils/SliderImages";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import ProductSlider from "./ProductSlider";
import BrowseByCategory from "./BrowseByCategory";
import BestSellingProduct from "./BestSellingProduct";
import BestDealHomePage from "./BestDealHomePage";
import ExploreOurProducts from "./ExploreOurProducts";
import NewArrival from "./NewArrival";
import { products } from "../utils/mock-data";

const HomePage = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const info = res.data;
      console.log(info);
      setProducts(info);
    });
  }, []);

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
    <>
      <div className="flex max-w-6xl  justify-between mx-auto mb-[140px]">
        <aside className="pt-10 w-2/12 border-r-2 border-black border-opacity-30 ">
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
            {/* {imagesList.map((list, listIndex) => {
            <div>
              <RxDotFilled />
            </div>;
          })} */}
            <RxDotFilled />
          </div>
        </div>
      </div>

      {/* Today's Section */}

      <ProductSlider product={Products} />

      {/* Browse By Category Section */}

      <BrowseByCategory />

      {/* Best Selling Section */}

      <BestSellingProduct bestSelling={Products} />

      {/* Best Deal Section */}

      <BestDealHomePage />

      {/* Explore Section */}
      <ExploreOurProducts explore={Products} />

      <NewArrival />

      <div className="flex justify-between py-10 mx-auto mb-[140px] max-w-4xl">
        <div className="text-center flex flex-col items-center ">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaShippingFast className="text-4xl  text-white  " />
          </div>

          <h3 className="mb-2 text-lg font-bold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaHeadset className="text-4xl  text-white" />
          </div>
          <h3 className="mb-2 text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <GoShieldCheck className="text-4xl text-white" />
          </div>
          <h3 className="mb-2 text-lg font-bold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

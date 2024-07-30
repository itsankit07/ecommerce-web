import {
  FaStore,
  FaShoppingBag,
  FaDollarSign,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import Carousel from "react-elastic-carousel";
import { AboutList } from "../utils/AboutSlider";

const About = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      {/* TOP PART */}

      <div className="flex flex-row justify-between ml-[8.4375rem] mt-[8.9375rem] border-2 border-black">
        <div className="w-[32.8125em] h-[21em] mt-[8.5625em] border-2 border-black">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-semibold">Our Story</h1>
            </div>
            <div className="flex flex-col mt-[2.5em] gap-[1.5em]">
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[44.0625em] h-[38.0625em] border-2 border-black">
          <img src="/AboutImage.png" alt="" />
        </div>
      </div>

      {/* SECOND PART */}

      <div className="flex justify-evenly items-center  mb-8 mt-[140px] px-36">
        <div className="w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center bg-white text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaStore className="text-3xl mb-1 text-white" />
          </div>
          <p className="text-2xl font-bold">10.5k</p>
          <p>Sellers active our site</p>
        </div>
        <div className="w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center bg-white text-gray-800 hover:bg-red-500 ">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaDollarSign className="text-3xl mb-1 text-white" />
          </div>
          <p className="text-2xl font-bold">33k</p>
          <p>Monthly Product Sale</p>
        </div>
        <div className="w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center bg-white text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaShoppingBag className="text-3xl mb-1 text-white" />
          </div>
          <p className="text-2xl font-bold">45.5k</p>
          <p>Customers active in our site</p>
        </div>
        <div className="w-[270px] h-[230px] p-6 border rounded-lg flex flex-col items-center justify-center bg-white text-gray-800 hover:bg-red-500">
          <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
            <FaSackDollar className="text-3xl mb-1 text-white" />
          </div>
          <p className="text-2xl font-bold">25k</p>
          <p>Annual gross sale in our site</p>
        </div>
      </div>

      {/* THIRD PART */}

      <div className="max-w-[1170px] mt-[140px] mb-[196px] flex flex-row justify-between mx-[135px] border-2 border-black">
        <Carousel breakPoints={breakPoints}>
          {AboutList.map((data) => {
            return (
              <>
                <div className="flex flex-col w-[370px] h-[564px] border-2 border-black">
                  <img
                    className="px-10 pt-20 bg-gray-200 w-[370px] h-[430px] border-2 border-black"
                    src={data.url}
                    alt=""
                  />
                  <div className="pt-1 tracking-wide font-inter font-medium text-xl">
                    {data.name}
                  </div>
                  <div className="pt-1 font-poppin font-normal">
                    {data.designation}
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>

      {/* LAST PART */}

      <div className="flex justify-between py-10 mb-[140px] mx-auto max-w-4xl">
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

export default About;

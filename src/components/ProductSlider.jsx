import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import useTimer from "../utils/hooks/useTimer";

const ProductSlider = ( {product} ) => {

  const timeLeft = useTimer();

  const handleScrollLeft = () => {
    const productClass = document.querySelector(".products-class");
    productClass.scrollLeft = productClass.scrollLeft - 250;
  };

  const handleScrollRight = () => {
    const productClass = document.querySelector(".products-class");
    productClass.scrollLeft = productClass.scrollLeft + 250;
  };

  return (
    <>
      <div className="max-w-6xl h-[493px] mx-auto flex flex-col gap-5">
        <div className="flex gap-4">
          <div className="w-[20px] h-[40px]  rounded bg-red-500"></div>
          <h4 className="text-red-500 flex items-center font-poppin font-semibold ">
            Todays
          </h4>
        </div>
        <div className="flex flex-row justify-start">
          <h1 className="text-4xl font-inter font-semibold flex items-center shadow-lg">
            Flash Sales
          </h1>
          <div className="ml-28 flex flex-col shadow-lg">
            <ul className="flex font-poppin font-medium gap-8">
              <li>Days</li>
              <li>Hours</li>
              <li>Minutes</li>
              <li>Seconds</li>
            </ul>
            <div className="flex font-inter font-bold text-4xl gap-5">
              <h1>{String(timeLeft.days).padStart(2, "0")} :</h1>
              <h1>{String(timeLeft.hours).padStart(2, "0")} :</h1>
              <h1>{String(timeLeft.minutes).padStart(2, "0")} :</h1>
              <h1>{String(timeLeft.seconds).padStart(2, "0")}</h1>
            </div>
          </div>
          <div className=" flex flex-row gap-6 ml-96 mr-4 rounded-full ">
            <div>
              <button onClick={handleScrollLeft}>
                <LuArrowLeft className="text-2xl" />
              </button>
            </div>
            <div>
              <button onClick={handleScrollRight}>
                <LuArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <div className=" h-[350px] mt-2 overflow-x-scroll overflow-y-hidden scroll-smooth products-class">
          <div className="flex gap-5 ">
            {product.map((data) => {
              return (
                <Link to={"/productDetails/" + data.id} key={data.id}>
                  <div
                    className="flex flex-col gap-0 min-w-[270px] h-[350px] drop-shadow-2xl"
                    key={data.id}
                  >
                    <div className="relative">
                      <div className="w-[55px] h-[26px] border rounded bg-red-500 flex justify-center absolute">
                        -{data.discount}%
                      </div>
                      <CiHeart className="absolute bg-white mt-3 px-1 py-1 rounded-full text-3xl right-0 mr-2" />
                      <MdOutlineRemoveRedEye className="absolute bg-white mt-6 px-1 py-1 rounded-full text-3xl top-6 right-0 mr-2" />
                      <div className="h-[250px] w-[270px] flex justify-center bg-[#F5F5F5]">
                        <img
                          className="px-10 py-9 mix-blend-multiply"
                          src={data.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <h3 className="font-poppin font-medium ">{data.title}</h3>
                    <div className="text-red-500 font-poppin text-sm">
                      {" "}
                      ${data.price}
                    </div>
                    <div className="text-sm font-poppin">
                      {data.rating.rate}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-red-500 w-[234px] my-[60px] h-[56px] border rounded flex justify-center items-center py-4 m-auto text-white cursor-pointer shadow-2xl">
        View All Products
      </div>
    </>
  );
};

export default ProductSlider;

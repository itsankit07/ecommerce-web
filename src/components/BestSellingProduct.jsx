import { products } from "../utils/mock-data";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const BestSellingProduct = ({ bestSelling }) => {
  return (
    <div className="max-w-6xl mx-auto mt-[8.75rem] mb-[8.75rem] h-[32.375rem] ">
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded"></div>
        <p className="font-poppin font-medium text-red-500">This Month</p>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="font-inter font-semibold text-4xl pt-5">
          Best Selling Products
        </h1>
        <button className="w-[9.9375em] bg-red-500 text-white rounded-md h-[3.5em]">
          View All
        </button>
      </div>

      <div className=" h-[358px] mt-10 overflow-x-scroll overflow-hidden scroll-smooth products-class">
        <div className="flex gap-5 ">
          {bestSelling.map((data) => {
            return data.rating.rate > 4 ? (
              <Link to={"/productDetails/" + data.id}>
                <div
                  className="flex flex-col gap-0 min-w-[270px] h-[350px]"
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
                  <div className="text-sm font-poppin">{data.rating.rate}</div>
                </div>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;

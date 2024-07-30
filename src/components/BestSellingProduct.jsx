import { products } from "../utils/mock-data";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const BestSellingProduct = () => {
  return (
    <div className="w-[73.125rem] mx-[8.4375rem] mt-[8.75rem] mb-[8.75rem] h-[32.375rem] ">
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-orange-600 rounded-md"></div>
        <p className="font-poppin font-medium text-orange-600">This Month</p>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="font-inter font-semibold text-4xl pt-5">
          Best Selling Products
        </h1>
        <button className="w-[9.9375em] bg-red-500 text-white rounded-md h-[3.5em]">
          View All
        </button>
      </div>

      <div className="max-w-[1170px] mt-[60px] h-[350px] overflow-x-scroll overflow-y-hidden scroll-smooth products-class">
        <div className="flex gap-5 px-3">
          {products.map((product) => {
            return (
              <div className="min-w-[270px] h-[350px]" key={product.id}>
                <div className="relative">
                  <div className="w-[55px] h-[26px] border rounded bg-orange-600 flex justify-center absolute">
                    -{product.discount}%
                  </div>
                  <CiHeart className="absolute text-2xl right-0 mr-1" />
                  <MdOutlineRemoveRedEye className="absolute text-2xl top-6 right-0 mr-1" />
                  <img
                    className="h-[250px] w-[270px] border bg-none flex justify-between rounded"
                    src={product.image}
                    alt=""
                  />
                </div>
                <h3>{product.title}</h3>
                <div>
                  {product.original_price}{" "}
                  <span>{product.discounted_price}</span>
                </div>
                <div>{`Stars(rating)`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;

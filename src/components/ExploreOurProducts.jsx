import { products } from "../utils/mock-data";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ExploreOurProducts = () => {
  return (
    <div className="w-[73.125rem] h-[63.5rem] mx-[8.4375rem] mt-[8.75rem] mb-[8.75rem]">
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded-md"></div>
        <p className="font-poppin font-medium text-red-500">Our Products</p>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-4xl pt-5">
          Explore Our Products
        </h1>
      </div>
      <div className="max-w-[1170px] mt-[60px] max-h-[45.75em]  overflow-y-hidden scroll-smooth products-class">
        <div className="flex flex-wrap gap-5 px-3">
          {products.map((product) => {
            return (
              <div className="min-w-[270px] h-[350px]" key={product.id}>
                <div className="relative">
                  <div className="w-[55px] h-[26px] border rounded bg-red-500 flex justify-center absolute">
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
      <div className="bg-red-500 w-[234px] my-[60px] h-[56px] border rounded flex justify-center items-center py-4 m-auto text-white cursor-pointer">
        View All Products
      </div>
    </div>
  );
};

export default ExploreOurProducts;

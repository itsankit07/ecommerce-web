import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";

const RelatedItem = ({ bestSelling }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredProducts = bestSelling.filter((data) => data.rating.rate > 4);

  const loadMoreProducts = () => {
    setVisibleCount(filteredProducts.length);
    setIsExpanded(true);
  };

  const closeProducts = () => {
    setVisibleCount(4);
    setIsExpanded(false);
  };

  return (
    <div
      className={`max-w-6xl mx-auto mt-[8.75rem] mb-[8.75rem] ${
        visibleCount > 4 ? "h-auto" : "h-[30rem]"
      }`}
    >
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded"></div>
        <p className="font-poppin font-medium text-red-500">Related Item</p>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="font-inter font-semibold text-4xl pt-5"></h1>
        {isExpanded ? (
          <button
            onClick={closeProducts}
            className="w-[9.9375em] bg-red-500 text-white rounded-md h-[3.5em]"
          >
            Close
          </button>
        ) : (
          <button
            onClick={loadMoreProducts}
            className="w-[9.9375em] bg-red-500 text-white rounded-md h-[3.5em]"
          >
            View All
          </button>
        )}
      </div>

      <div className=" mt-10 h-[45.75em] mx-auto overflow-x-scroll overflow-hidden scroll-smooth products-class">
        <div className="flex flex-wrap gap-5 ">
          {filteredProducts.slice(0, visibleCount).map((data) => {
            return data.rating.rate > 4 ? (
              <Link to={"/productDetails/" + data.id}>
                <div
                  className="flex flex-col gap-0 w-[270px] h-[350px] drop-shadow-2xl"
                  key={data.id}
                >
                  <div className="relative">
                    <div className="w-[55px] h-[26px] border rounded bg-red-500 flex justify-center absolute">
                      -{data.discount}%
                    </div>
                    <CiHeart className="absolute bg-white mt-3 px-1 py-1 rounded-full text-3xl right-0 mr-2 shadow-xl" />
                    <MdOutlineRemoveRedEye className="absolute bg-white mt-6 px-1 py-1 rounded-full text-3xl top-6 right-0 mr-2 shadow-xl" />
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
                  <div>
                    <StarRating rating={data.rating.rate} />
                  </div>
                </div>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedItem;

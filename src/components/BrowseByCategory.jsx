import axios from "axios";
import { CiMobile3 } from "react-icons/ci";
import { GiJewelCrown, GiClothes, GiLoincloth } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BrowseByCategory = () => {
  const [browserCategory, setBrowserCategory] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      const info = res.data;
      console.log(info);
      setBrowserCategory(info);
    });
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-[8.75rem] h-[6.75rem]">
        <div className="flex flex-row justify-start gap-4 items-center">
          <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded"></div>
          <p className="font-poppin font-medium text-red-500">Categories</p>
        </div>
        <div>
          <h1 className="font-inter font-semibold text-4xl pt-5">
            Browse By Category
          </h1>
        </div>
      </div>
      <div className="max-w-3xl flex flex-row mx-auto  mt-[60px] gap-[1.875em] ">
        <Link to={"/singlePage/" + browserCategory[0]}>
          <div className="min-w-[10.625em] h-[9.0625em] border-2 border-gray-300 relative">
            <CiMobile3 className="absolute left-0 right-0 mx-auto top-0 bottom-10 my-auto text-6xl" />
            <h1 className="px-9 pt-20 font-poppin font-normal text-lg">
              {browserCategory[0]}
            </h1>
          </div>
        </Link>

        <Link to={"/singlePage/" + browserCategory[1]}>
          <div className="min-w-[10.625em] h-[9.0625em] border-2 border-gray-300 relative">
            <GiJewelCrown className="absolute left-0 right-0 mx-auto top-0 bottom-10 my-auto text-6xl" />
            <h1 className=" px-12 pt-20 font-poppin font-normal text-lg">
              {browserCategory[1]}
            </h1>
          </div>
        </Link>

        <Link to={"/singlePage/" + browserCategory[2]}>
          <div className="min-w-[10.625em] h-[9.0625em] border-2 border-gray-300 relative">
            <GiClothes className="absolute left-0 right-0 mx-auto top-0 bottom-10 my-auto text-6xl" />
            <h1 className="px-4 pt-20 font-poppin font-normal text-lg">
              {browserCategory[2]}
            </h1>
          </div>
        </Link>

        <Link to={"/singlePage/" + browserCategory[3]}>
          <div className="min-w-[10.625em] h-[9.0625em] border-2 border-gray-300 relative">
            <GiLoincloth className="absolute left-0 right-0 mx-auto top-0 bottom-10 my-auto text-6xl" />
            <h1 className="px-1 pt-20 font-poppin font-normal text-lg">
              {browserCategory[3]}
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BrowseByCategory;

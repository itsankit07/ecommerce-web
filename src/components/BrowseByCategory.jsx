import { products } from "../utils/mock-data";
import { CiMobile4 } from "react-icons/ci";

const BrowseByCategory = () => {
  return (
    <>
      <div className="w-[73.125rem] mx-[8.4375rem] mt-[8.75rem] h-[6.75rem] border-2 border-black">
        <div className="flex flex-row justify-start gap-4 items-center">
          <div className="w-[1.25em] h-[2.5em] bg-orange-600 rounded-md"></div>
          <p className="font-poppin font-medium text-orange-600">Categories</p>
        </div>
        <div>
          <h1 className="font-inter font-semibold text-4xl pt-5">
            Browse By Category
          </h1>
        </div>
      </div>
      <div className="max-w-[1170px] flex flex-row ml-[8.4375em]  mt-[60px] gap-[1.875em] overflow-x-scroll overflow-y-hidden scroll-smooth">
        {products.map((category) => {
          return (
            <div className="min-w-[10.625em] h-[9.0625em] border-2 border-black relative">
              <CiMobile4 className="absolute" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrowseByCategory;

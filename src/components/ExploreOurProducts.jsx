import { products } from "../utils/mock-data";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const ExploreOurProducts = ({ explore }) => {
  return (
    <div className="max-w-6xl h-[63.5rem] mx-auto mt-[8.75rem] mb-[8.75rem]">
      <div className="flex flex-row justify-start gap-4 items-center">
        <div className="w-[1.25em] h-[2.5em] bg-red-500 rounded"></div>
        <p className="font-poppin font-medium text-red-500">Our Products</p>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-4xl pt-5">
          Explore Our Products
        </h1>
      </div>

      <div className=" mt-[60px] h-[45.75em] mx-auto overflow-x-scroll overflow-hidden scroll-smooth products-class">
        <div className="flex flex-wrap gap-5">
          {explore.map((data) => {
            return (
              <Link to={"/productDetails/" + data.id}>
                <div
                  className="w-[270px] h-[350px] flex flex-col"
                  key={data.id}
                >
                  <div className="relative">
                    {data.rating.rate > 4 && (
                      <div className=" bg-green-400 absolute text-white font-poppin text-sm left-2 top-2 px-3 py-1 rounded">
                        New
                      </div>
                    )}
                    <CiHeart className="absolute bg-white mt-3 px-1 py-1 rounded-full text-3xl right-0 mr-2" />
                    <MdOutlineRemoveRedEye className="absolute bg-white mt-6 px-1 py-1 rounded-full text-3xl top-6 right-0 mr-2" />
                    <div className="h-[250px] w-[270px] flex justify-center bg-[#F5F5F5]">
                      <img className="px-10 py-9" src={data.image} alt="" />
                    </div>
                  </div>
                  <h3 className="font-poppin font-medium">{data.title}</h3>
                  <div className="text-red-500 font-poppin text-sm">
                    {" "}
                    ${data.price}
                  </div>
                  <div className="text-sm font-poppin">{data.rating.rate}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-red-500 w-[234px] my-[60px] h-[56px] border rounded flex justify-center items-center py-4 m-auto text-white cursor-pointer">
        <Link to="/viewAllProduct">View All Products</Link>
      </div>
    </div>
  );
};

// Higher Order Component

// export const withNewLabel = (ExploreOurProducts) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute bg-green-500 text-white">New</label>
//         <ExploreOurProducts {...props} />
//       </div>
//     );
//   };
// };

export default ExploreOurProducts;

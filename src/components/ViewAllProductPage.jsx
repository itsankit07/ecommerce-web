import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const ViewAllProductPage = () => {
  const [allProduct, setallProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        const info = res.data;
        console.log(info);
        setallProducts(info);
      });
    }, 2000);
  }, []);

  if (allProduct.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="max-w-6xl my-20 mx-auto h-full">
      <div className="flex flex-wrap gap-5">
        {allProduct.map((data) => {
          return (
            <div className="w-[270px] h-[350px] flex flex-col" key={data.id}>
              <div className="relative">
                {data.rating.rate > 4 && (
                  <div className=" bg-green-400 absolute text-white font-poppin text-sm left-2 top-2 px-3 py-1 rounded">
                    New
                  </div>
                )}
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
              <h3 className="font-poppin font-medium">{data.title}</h3>
              <div className="text-red-500 font-poppin text-sm">
                {" "}
                ${data.price}
              </div>
              <div className="text-sm font-poppin">{data.rating.rate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAllProductPage;

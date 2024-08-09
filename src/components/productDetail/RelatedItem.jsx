import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import { useEffect, useState } from "react";

const RelatedItem = ({ detail }) => {
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const filtered = res.data.filter(
        (item) => item.category === detail.category
      );
      //    console.log(filter);
      setRelatedProduct(filtered);
    });
  }, [detail]);

  return (
    <>
      <div className="max-w-6xl h-[493px] mx-[135px] mt-14 mb-28 flex flex-col gap-5">
        <div className="flex gap-4">
          <div className="w-[20px] h-[40px]  rounded bg-red-500"></div>
          <h4 className="text-red-500 flex items-center font-poppin font-semibold ">
            Related Item
          </h4>
        </div>

        <div className=" h-[350px] mt-6 overflow-x-scroll overflow-hidden scroll-smooth">
          <div className="flex gap-5 ">
            {relatedProduct.map((data) => {
              return (
                <Link to={"/productDetails/" + data.id} key={data.id}>
                  <div
                    className="flex flex-col gap-0 min-w-[270px] h-[350px] group"
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
                      <button className="absolute bg-black text-white bottom-0 w-full py-2 font-poppin text-sm opacity-0 group-hover:opacity-100 duration-200">
                        Add to cart
                      </button>
                    </div>
                    <h3 className="font-poppin font-medium ">{data.title}</h3>
                    <div className="text-red-500 font-poppin text-sm">
                      {" "}
                      ${data.price}
                    </div>
                    <div className="text-start">
                      <StarRating rating={data.rating.rate} />
                      {/* {data.rating.rate} */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedItem;

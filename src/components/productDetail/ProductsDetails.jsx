import axios from "axios";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedItem from "./RelatedItem";

const ProductsDetails = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { prodID } = useParams();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + prodID).then((res) => {
      const info = res.data;
      setProductDetail(info);
    });
  }, []);

  return (
    <>
      <div className="flex flex-row justify-evenly mt-[181px]">
        <div className="flex flex-row justify-evenly gap-[30px]">
          <div className=" w-[170px] h-[600px] flex flex-col justify-evenly">
            <div className="w-[168px] h-[138px] bg-[#F5F5F5] "></div>
            <div className="w-[168px] h-[138px] bg-[#F5F5F5] "></div>
            <div className="w-[168px] h-[138px] bg-[#F5F5F5] "></div>
            <div className="w-[168px] h-[138px] bg-[#F5F5F5] "></div>
          </div>
          <div className="flex justify-center items-center w-[500px] h-[600px] bg-[#F5F5F5]">
            <img
              className="w-[446px] h-[315px] px-32 py-6 mix-blend-multiply"
              src={productDetail.image}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[400px] min-h-[600px] ">
          <h4 className="font-bold font-inter tracking-wider">
            {productDetail.title}
          </h4>
          <div className="w-[290px] h-[21px]  mt-4 flex flex-row gap-3 items-center">
            <span>⭐⭐⭐⭐</span> <span>150 reviews</span>{" "}
            <span className="text-green-400">In-stock</span>
          </div>
          <p className="mt-4 font-inter text-xl">${productDetail.price}</p>
          <p className="mt-4 font-poppin text-sm">
            {productDetail.description}
          </p>
          <div className="flex mt-6 flex-col justify-evenly border-zinc-300 border-t-2">
            <div className="flex flex-row gap-3 mt-6 items-center w-[150px] h-[20px]">
              <p className="font-poppin">Colours:</p> <p>⭕</p> <p>✅</p>
            </div>
            <div className="w-[296px] h-[32px] mt-6  flex gap-6 items-center">
              <p className="font-poppin">Size:</p>
              <div className="flex flex-row justify-evenly gap-4">
                <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center  rounded">
                  XS
                </div>
                <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded bg-red-500 text-white">
                  S
                </div>
                <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded">
                  M
                </div>
                <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded">
                  L
                </div>
                <div className="w-[32px] h-[32px] border-zinc-300 border-2 flex justify-center items-center rounded">
                  XL
                </div>
              </div>
            </div>
            <div className="flex mt-6 flex-row gap-4">
              <div className="w-[165px] h-[44px] border-2 flex flex-row justify-between border-zinc-300 rounded">
                <div className="border-r-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold">
                  +
                </div>
                <p className="flex items-center text-xl font-semibold">2</p>
                <div className="border-l-2 flex justify-center items-center border-zinc-300 w-[41px] text-xl font-semibold bg-red-500">
                  -
                </div>
              </div>
              <div className="w-[165px] h-[44px] font-poppin flex justify-center items-center text-white bg-red-500 rounded">
                Buy Now
              </div>
              <div className="w-[40px] h-[40px] border-2 border-zinc-300"></div>
            </div>
            <div className="w-[399px] h-[180px] mt-10 flex flex-col gap-4">
              <div className="flex flex-row justify-evenly items-center mt-2">
                <TbTruckDelivery className="text-3xl" />
                <div className=" flex flex-col gap-1">
                  <h1 className="font-poppin font-semibold">Free Delivery</h1>
                  <p className="font-poppin text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center mt-2 ml-4">
                <GiReturnArrow className="text-3xl " />
                <div className=" flex flex-col gap-1">
                  <h1 className="font-poppin font-semibold">Return Delivery</h1>
                  <p className="font-poppin text-sm">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedItem detail={productDetail} />
    </>
  );
};

export default ProductsDetails;

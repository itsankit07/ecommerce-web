import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { prodID } = useParams();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + prodID).then((res) => {
      const info = res.data;
      //console.log(info);
      setProductDetail(info);
    });
    //  fetchMenu();
  }, []);

  // const fetchMenu = () => {
  //      axios.get("https://fakestoreapi.com/products").then((res) => {
  //        const info = res.data;
  //        console.log(info);
  //        setallProducts(info);
  //      });
  // };
  //console.log(productDetail);

  return (
    <div className="flex flex-row justify-evenly mt-[181px] mb-[140px]">
      <div className="flex flex-row justify-evenly gap-[30px]">
        <div className="border-2 border-black w-[170px] h-[600px] flex flex-col justify-evenly">
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
        </div>
        <div className="border-2 border-black flex justify-center items-center w-[500px] h-[600px] bg-[#F5F5F5]">
          <img
            className="w-[446px] h-[315px] px-32 py-6 mix-blend-multiply"
            src={productDetail.image}
            alt=""
          />
        </div>
      </div>
      <div className="border-2 border-black w-[400px] h-[600px]">
        <h4 className="font-bold font-inter tracking-wider">
          {productDetail.title}
        </h4>
        <div className="w-[290px] h-[21px] border-black border-2 mt-4 flex flex-row justify-evenly items-center">
          <span>⭐⭐⭐⭐</span> <span>150 reviews</span>{" "}
          <span className="text-green-400">In-stock</span>
        </div>
        <p className="mt-4 font-inter text-xl">${productDetail.price}</p>
        <p className="mt-4 font-poppin text-sm">{productDetail.description}</p>
        <div className="flex mt-6 flex-col justify-evenly border-black border-2">
          <div className="flex flex-row justify-evenly mt-6 items-center w-[150px] h-[20px]">
            <p>Colours:</p> <p>⭕</p> <p>✅</p>
          </div>
          <div className="w-[296px] h-[32px] mt-6 border-black border-2 flex gap-6 items-center">
            <p>Size:</p>
            <div className="flex flex-row justify-evenly gap-4">
              <div className="w-[32px] h-[32px] border-black border-2">XS</div>
              <div className="w-[32px] h-[32px] border-black border-2">S</div>
              <div className="w-[32px] h-[32px] border-black border-2">M</div>
              <div className="w-[32px] h-[32px] border-black border-2">L</div>
              <div className="w-[32px] h-[32px] border-black border-2">XL</div>
            </div>
          </div>
          <div className="flex mt-6 flex-row gap-4">
            <div className="w-[165px] h-[44px] border-2 flex flex-row justify-between border-black">
              <div className="border-r-2 flex justify-center items-center border-black w-[41px]">
                +
              </div>
              <div className="border-l-2 flex justify-center items-center border-black w-[41px]">
                -
              </div>
            </div>
            <div className="w-[165px] h-[44px] border-2 border-black flex justify-center items-center">
              Buy Now
            </div>
            <div className="w-[40px] h-[40px] border-2 border-black"></div>
          </div>
          <div className="w-[399px] h-[180px] mt-10 border-2 border-black ">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

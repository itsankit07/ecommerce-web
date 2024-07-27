import React from "react";

const ProductsDetails = () => {
  return (
    <div className="flex flex-row justify-evenly mt-[181px] mb-[140px]">
      <div className="flex flex-row justify-evenly gap-[30px]">
        <div className="border-2 border-black w-[170px] h-[600px] flex flex-col justify-evenly">
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
          <div className="w-[168px] h-[138px] border-2 border-black"></div>
        </div>
        <div className="border-2 border-black w-[500px] h-[600px] bg-slate-200">
          <img
            className="w-[446px] h-[315px] mt-[154px] ml-[27px]"
            src="/ProductImageMain.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="border-2 border-black w-[400px] h-[600px]">
        <h4 className="font-bold tracking-wider">Havic HV G-92 Gamepad</h4>
        <div className="w-[290px] h-[21px] border-black border-2 mt-4 flex flex-row justify-evenly items-center">
          <span>⭐⭐⭐⭐</span> <span>150 reviews</span>{" "}
          <span className="text-green-400">In-stock</span>
        </div>
        <p className="mt-4 font-normal text-xl">$192</p>
        <p className="mt-4">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className="flex mt-6 flex-col justify-evenly border-black border-2">
          <div className="flex flex-row justify-evenly items-center w-[150px] h-[20px]">
            <p>Colours:</p> <p>⭕</p> <p>✅</p>
          </div>
          <div className="w-[296px] h-[32px] mt-6 border-black border-2 flex gap-6 items-center">
            <p>Size:</p>
            <div className="flex flex-row justify-evenly gap-4">
              <div className="w-[32px] h-[32px] flex items-center border-black border-2">
                XS
              </div>
              <div className="w-[32px] h-[32px] border-black border-2">S</div>
              <div className="w-[32px] h-[32px] border-black border-2">M</div>
              <div className="w-[32px] h-[32px] border-black border-2">L</div>
              <div className="w-[32px] h-[32px] border-black border-2">XL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

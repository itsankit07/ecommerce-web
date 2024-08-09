import React from "react";

const CartPage = () => {
  return (
    <div className="max-w-6xl h-[840px] mx-auto  mt-[181px] mb-[140px] flex flex-col justify-between">
      <div className="h-[436px] flex flex-col justify-between">
        <div className="flex flex-row justify-evenly  py-6  shadow-xl">
          <p className="font-poppin">Product</p>
          <p className="font-poppin">Price</p>
          <p className="font-poppin">Quantity</p>
          <p className="font-poppin">Subtotal</p>
        </div>
        <div className="flex flex-row justify-evenly  py-6 shadow-xl">
          <p className="font-poppin">LCD Moniter</p>
          <p className="font-poppin">$650</p>
          <p className="font-poppin">01</p>
          <p className="font-poppin">$650</p>
        </div>
        <div className="flex flex-row justify-evenly py-6 shadow-xl">
          <p>HI Gamepad</p>
          <p>$550</p>
          <p>02</p>
          <p>$1100</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[218px] h-[56px] border-2 border-black px-12 py-4 font-poppin text-sm">
            Return To Shop
          </div>
          <div className="w-[218px] h-[56px] border-2 border-black px-16 py-4 font-poppin text-sm">
            Update Cart
          </div>
        </div>
      </div>
      <div className="h-[336px] flex flex-row justify-between">
        <div className=" w-6/12 ">
          <input
            className="bg-slate-200 mt-2 w-64 h-[3.125em] rounded pl-2"
            type="text"
            name=""
            id=""
            placeholder="Coupon Code"
          />
          <button className="w-[200px] h-[3.125em] text-white bg-red-500 font-poppin ml-2 rounded">
            Apply Coupon
          </button>
        </div>
        <div className="w-5/12 border-2 border-black">
          <div className="mx-6 mt-7 flex flex-col justify-between">
            <h1 className="font-poppin font-medium text-lg">Cart Total</h1>
            <div className="flex flex-row justify-between mt-8 py-2 border-b-2">
              <p>Subtotal</p>
              <p>$1750</p>
            </div>
            <div className="flex flex-row justify-between mt-4 py-2 border-b-2">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex flex-row justify-between mt-4 py-2">
              <p>Total</p>
              <p>$1750</p>
            </div>
            <button className="w-[200px] h-[3.125em] text-white bg-red-500 font-poppin mx-28 rounded mt-3 ">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

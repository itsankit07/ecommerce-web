import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

const Badges = () => {
  return (
    <div className="flex justify-between py-10 mx-auto mb-[140px] max-w-4xl">
    <div className="text-center flex flex-col items-center ">
      <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
        <FaShippingFast className="text-4xl  text-white  " />
      </div>

      <h3 className="mb-2 text-lg font-bold">FREE AND FAST DELIVERY</h3>
      <p className="text-sm">Free delivery for all orders over $140</p>
    </div>
    <div className="text-center flex flex-col items-center">
      <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
        <FaHeadset className="text-4xl  text-white" />
      </div>
      <h3 className="mb-2 text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
      <p className="text-sm">Friendly 24/7 customer support</p>
    </div>
    <div className="text-center flex flex-col items-center">
      <div className="mb-6 p-3 bg-black  rounded-full shadow-[0px_0px_0_8px_rgba(0,0,0,0.3)]">
        <GoShieldCheck className="text-4xl text-white" />
      </div>
      <h3 className="mb-2 text-lg font-bold">MONEY BACK GUARANTEE</h3>
      <p className="text-sm">We return money within 30 days</p>
    </div>
  </div>  )
}

export default Badges
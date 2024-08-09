import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full border-b-4">
      <div className="w-full h-12 flex bg-black text-white items-center">
        <span className="flex justify-center w-11/12 font-poppin">
          Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!
          <a className="border-b-2 mx-3 font-bold    " href="">
            ShopNow
          </a>{" "}
        </span>
        <h4>English</h4>
      </div>
      <div className="w-9/12 flex flex-row justify-between m-auto h-20 items-center ">
        <div className="font-extrabold text-xl font-inter">Exclusive</div>

        <ul className="flex gap-10 mr-62">
          <li className="hover:border-b-2 border-black font-poppin ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 border-black font-poppin">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:border-b-2 border-black font-poppin">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:border-b-2 border-black font-poppin ">
            <Link to="/login">Sign Up</Link>
          </li>
        </ul>

        <div>
          <input
            className="bg-slate-200 h-[3.125em] flex w-64 font-poppin text-sm pl-4  right-80 top-16 absolute"
            type="text"
            placeholder="What are you looking for?"
          />
          <IoSearch className="relative left-32 text-2xl" />
        </div>
        <div className="flex flex-row gap-4">
          <CiHeart className="text-2xl" />
          <AiOutlineShoppingCart className="text-2xl" />
          {/* <CgProfile className="text-2xl" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

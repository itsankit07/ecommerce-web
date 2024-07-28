import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full border-b-4">
      <div className="w-full h-12 flex bg-black text-white items-center">
        <span className="flex justify-center w-11/12">
          Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!
          <a className="border-b-2 mx-3 font-bold    " href="">
            ShopNow
          </a>{" "}
        </span>
        <h4>English</h4>
      </div>
      <div className="w-9/12 flex justify-between m-auto h-20 items-center">
        <div className="font-semibold text-lg">Exclusive</div>
        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/login">Sign Up</Link>
          </li>
        </ul>
        <div>
          <p>What are you looking for?</p>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Header;

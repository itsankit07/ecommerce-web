import { CgProfile } from "react-icons/cg";
import {
  IoPersonOutline,
  IoBagOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="relative  mt-1 z-10">
        <button onClick={toggleDropdown}>
          <CgProfile className="h-7 w-7 px-1 py-1 text-black rounded-full hover:bg-red-600 " />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 h-44 bg-black bg-opacity-55 border rounded-md shadow-lg ">
            <p className="px-4 py-2 text-white flex flex-row justify-evenly items-center">
              <IoPersonOutline />
              <Link to="/AccountPage">Account</Link>
            </p>
            <p className="px-4 py-2 text-white flex flex-row justify-evenly items-center">
              <IoBagOutline />
              Orders
            </p>
            {/* <p className="px-4 py-2 text-white flex flex-row justify-evemly items-center">
              <IoLogOutOutline />
              Logout
            </p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;

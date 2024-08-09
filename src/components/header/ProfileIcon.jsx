import { CgProfile } from "react-icons/cg";

const ProfileIcon = () => {
  return (
    <div>
      <div className="relative ml-4 mt-1 z-10">
        <button onClick={toggleDropdown}>
          <CgProfile className="h-7 w-7 px-1 py-1 text-black rounded-full hover:bg-red-600 " />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 h-44 bg-black bg-opacity-5 border rounded-md shadow-lg">
            <p className="px-4 py-2">Account Profile</p>

            <p className="px-4 py-2">Dashboard</p>
            <p className="px-4 py-2">Orders</p>
            <p className="px-4 py-2">Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;

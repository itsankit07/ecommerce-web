import React from "react";
import AccountSection from "./AccountSection";

const AccountSidebar = () => {
  return (
    <div className="space-y-4">
      <AccountSection title="Manage My Account">
        <ul className="space-y-2">
          <li className="text-gray-500 hover:text-red-500">My Profile</li>
          <li className="text-gray-500 hover:text-red-500">Address Book</li>
          <li className="text-gray-500 hover:text-red-500">
            My Payment Options
          </li>
        </ul>
      </AccountSection>
      <AccountSection title="My Orders">
        <ul className="space-y-2">
          <li className="text-gray-500 hover:text-red-500">My Returns</li>
          <li className="text-gray-500 hover:text-red-500">My Cancellations</li>
        </ul>
      </AccountSection>
      <AccountSection title="My WishList">
        <ul className="mt-2">
          <li className="text-gray-500 hover:text-red-500">Wishlist Items</li>
        </ul>
      </AccountSection>
    </div>
  );
};

export default AccountSidebar;

import React, { useState } from "react";

const AccountSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2
        onClick={toggleOpen}
        className="cursor-pointer font-semibold text-lg font-poppin py-2"
      >
        {title}
      </h2>
      {isOpen && <div className="pl-8 font-poppin">{children}</div>}
    </div>
  );
};

export default AccountSection;

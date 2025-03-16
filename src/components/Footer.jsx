import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/AboutUs");
  };

  const handleContact = () => {
    navigate("/Contact");
  };

  const handlePrivacy = () => {
    navigate("/PrivacyPolicy");
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="mx-24 mt-20 bg-gray-900 text-white border-t-2 border-t-gray-800 flex justify-items-end max-w-full  justify-between px-2 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center gap-10">
          <h1 className="font-bold text-2xl">
            Starlight <span className="text-red-800">Studios</span>
          </h1>
          <p className="text-xs">
            © STARLIGHT STUDIOS, 2023—2028 <br />
            Created by
            <span className="font-medium"> Arpit Kushwah</span>
          </p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={handleAbout}
            className="hover:text-orange-700 duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={handleContact}
            className="hover:text-orange-700 duration-200 cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={handlePrivacy}
            className="hover:text-orange-700 duration-200 cursor-pointer"
          >
            Privacy
          </button>
          
            <button className="hover:text-orange-700 duration-200 cursor-pointer ml-20 " onClick={handleHome}>
              <i class="fa-solid fa-up-long"></i>
            </button>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;

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

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };

  return (
    <div>
      <div className=" mx-auto sm:mx-24 md:mx-0 mt-20 bg-gray-900 text-white border-t-2 border-t-gray-800 flex max-w-full  justify-between py-10 px-2 sm:px-6 lg:px-8 h-auto w-auto  flex-col md:flex-row ">
        <div className="sm:flex flex-col sm:items-center sm:gap-10 md:flex-row ">
          <h1 className="font-bold text-4xl md:text-2xl text-nowrap">
            Starlight <span className="text-red-800">Studios</span>
          </h1>
          <p className="text-xs text-nowrap pt-5 sm:pt-0 hidden md:block">
            © STARLIGHT STUDIOS, 2023—2028 <br />
            Created by
            <span className="font-medium"> Arpit Kushwah</span>
          </p>
        </div>
        <div className="text-[10px]   flex justify-start md:ml-20 gap-10 md:gap-5 flex-row sm:flex h-sm sm:h-auto sm:w-auto sm:justify-between md:justify-start lg:ml-60">
          <button
            onClick={handleAbout}
            className=" hover:text-orange-700 duration-200 cursor-pointer text-sm"
          >
            About
          </button>
          <button
            onClick={handleContact}
            className="hover:text-orange-700 duration-200 cursor-pointer text-sm"
          >
            Contact
          </button>
          <button
            onClick={handlePrivacy}
            className="hover:text-orange-700 duration-200 cursor-pointer text-sm"
          >
            Privacy policy
          </button>

          <button
            className="hover:text-orange-700 duration-200 cursor-pointer border-2 border-amber-300 my-5 px-3 py-1 rounded-lg "
            onClick={handleClick}
          >
            <i class="fa-solid fa-up-long"></i>
          </button>
        </div>
        <div className="sm:mx-auto">
          <p className="text-sm text-nowrap md:hidden  ">
            © STARLIGHT STUDIOS, 2023—2028 <br />
            Created by
            <span className="font-medium"> Arpit Kushwah</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

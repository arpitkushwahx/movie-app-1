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
        behavior: 'smooth' // This makes the scrolling smooth
      });
    };

  return (
    <div>
      <div className="mx-24 mt-20 bg-gray-900 text-white border-t-2 border-t-gray-800 flex justify-items-end max-w-full  justify-between px-2 sm:px-6 lg:px-8 h-auto sm:h-20 w-auto  flex-col">
        <div className="sm:flex flex-col sm:items-center sm:gap-10 ">
          <h1 className="font-bold text-2xl text-nowrap">
            Starlight <span className="text-red-800">Studios</span>
          </h1>
          {/* <p className="text-xs pt-5">
            © STARLIGHT STUDIOS, 2023—2028 <br />
            Created by
            <span className="font-medium"> Arpit Kushwah</span>
          </p> */}
        </div>
        <div className="text-[10px] flex gap-3 flex-row sm:flex sm:gap-5 h-sm sm:h-auto sm:w-auto">
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
             
            <button className="hover:text-orange-700 duration-200 cursor-pointer border-2 border-amber-300 my-5 px-3 py-1 rounded-lg " onClick={handleClick}>
              <i class="fa-solid fa-up-long"></i>
            </button>
          
        </div>
        <div>
          <p className="text-[10px] text-nowrap pt-5 pb-5">
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

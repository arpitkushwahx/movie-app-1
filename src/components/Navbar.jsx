import React, { useState,useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContextProvider";
function Navbar() {
  const [data, setData] = useState("");
  const { setQuery } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  useEffect(() => {
    
      setQuery(data);
      data?navigate("/Search"):navigate("/")
    
  }, [data]);

  return (
    <div className="z-3 px-0 fixed w-full h-20 text-white border-b-2 border-b-gray-800 bg-gray-900">
      <nav className="  grid place-items-center mx-auto max-w-full z-50 align-middle px-2 sm:px-6 lg:px-8 h-20 ">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          <div className="transition-all">
            <h1
              className="font-bold text-2xl cursor-pointer"
              onClick={handleHome}
            >
              Starlight <span className="text-red-800">Stdudios</span>
            </h1>
          </div>
          <div className=" inline-flex ">
            <div className="inline-flex gap-8 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-white"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                <h1>Home</h1>
              </NavLink>

              <div className="relative group hover:text-orange-700">
                <div className="  rounded-md cursor-pointer">
                  Pages
                </div>
                <div className="absolute hidden bg-gray-800 text-white  rounded-md group-hover:block w-48 ">
                  <Link to="/AboutUs" className="block  py-2 px-4 hover:bg-gray-600">
                   About Us
                  </Link>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                    Contact Us
                  </a>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-600">
                    Home
                  </a>
                </div>
              </div>

              <h1>Pricing plan</h1>
              <h1>Catalog</h1>
            </div>
            
          </div>
          <div>
            <input
              type="text"
              placeholder="search movie..."
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="text-center rounded-xl h-7 w-48"
            />

            <span>
              <button  className="ml-3 cursor-pointer hover:text-red-400">
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

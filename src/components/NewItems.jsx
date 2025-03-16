import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import { Link, useNavigate } from "react-router-dom";

function NewItems() {
  const navigate = useNavigate();
  const { data } = useContext(MovieContext);
  const imagePath = "https://image.tmdb.org/t/p/w1280";
 
  return (
    <div>
      <div className="pt-36 pb-24 px-28">
        <div className="text-white flex flex-row justify-between">
          <h1 className="text-4xl">
            <span className="font-bold">NEW ITEMS</span> OF THIS SEASON
          </h1>
          {/* <div className="mr-5">
            <button className="cursor-pointer mr-5">
              <i class="fa-solid fa-left-long fa-2xl"></i>
            </button>
            <button className="cursor-pointer">
              <i class="fa-solid fa-right-long fa-2xl"></i>
            </button>
          </div> */}
        </div>
        <div className="grid grid-cols-5 ">
          {data.slice(0, 5).map((e) => (
            <div className="p-4 " key={e.id}>
              <div>
                <Link to={`/details/${e.id}`}>
                  {" "}
                  <img
                    src={imagePath + e.poster_path}
                    className="hover:-translate-y-1 h-96 duration-300 rounded-lg border-2 border-red-400 hover:shadow-amber-300 shadow-md "
                    alt="image"
                  />
                </Link>
              </div>
              <div className="">
                <h1 className="text-white text-xl text-wrap font-medium">
                  {" "}
                  {e.original_title}
                </h1>
                <p className="text-yellow-500">{e.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewItems;

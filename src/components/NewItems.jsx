import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import { Link, useNavigate } from "react-router-dom";

function NewItems() {
  const navigate = useNavigate();
  const { data } = useContext(MovieContext);
  const imagePath = "https://image.tmdb.org/t/p/w1280";

  //   const handleNavigate =()=>{
  //     navigate("/Details/${e.id}")
  //   }
  return (
    <div>
      <div className="pt-36 pb-24 px-28">
        <div className="text-white flex flex-row justify-between">
          <h1 className="text-4xl">
            <span className="font-bold">NEW ITEMS</span> OF THIS SEASON
          </h1>
          <span>L</span>
          <span>R</span>
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
              <div className="pt-2">
                <h1 className="text-white text-2xl text-nowrap">
                  {" "}
                  {e.original_title}
                </h1>
                <h2 className="text-yellow-500">{e.release_date}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewItems;

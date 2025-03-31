import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContextProvider";
import { useNavigate } from "react-router-dom";

function Search() {
  const { searchInfo, imagePath, noImageIcon } = useContext(MovieContext);
  console.log("query info", searchInfo);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 pt-30 h-auto sm:mx-5 text-white gap-2 sm:gap-x-5 md:gap-y-10 md:gap-5 lg:gap-y-10 lg:gap-x-10 lg:mx-20 mx-3 md:mx-5 ">
          {searchInfo.map((e) => (
            <div key={e.id} className=" h-auto ">
              <img
                src={e.poster_path ? imagePath + e.poster_path : noImageIcon}
                onClick={() => {
                  navigate(`/Details/${e.id}`);
                }}
                // alt={e.poster_path?"":"Unavailable"}
                className="rounded-lg hover:shadow-md hover:shadow-amber-300 hover:opacity-50 hover:-translate-y-1 duration-200 cursor-pointer border-2 border-red-700"
              />
              <div className="my-auto">
                <h1 className="md:text-2xl">{e.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

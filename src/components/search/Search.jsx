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
        <div className="grid grid-cols-2 sm:grid-cols-4 h-auto sm:mx-40 text-white gap-2 mb-40 mx-3 ">
          {searchInfo.map((e) => (
            <div key={e.id} className=" h-50 sm:w-50 py-30 pb-40 ">
              <img
                src={e.poster_path?imagePath + e.poster_path: noImageIcon}
                onClick={() => {
                  navigate(`/Details/${e.id}`);
                }}
                // alt={e.poster_path?"":"Unavailable"}
                className="rounded-lg hover:shadow-md hover:shadow-amber-300 hover:opacity-50 hover:-translate-y-1 duration-200 cursor-pointer border-2 border-red-700"
              />
              <div className="my-auto"><p>{e.title}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

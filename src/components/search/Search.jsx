import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContextProvider";
import { useNavigate } from "react-router-dom";

function Search() {
  const { searchInfo, imagePath } = useContext(MovieContext);
  console.log("query info", searchInfo);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Details/:id");
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-4 h-full mx-40 text-white">
          {searchInfo.map((e) => (
            <div key={e.id} className="h-50 w-50 g-5 my-28">
              <img
                src={imagePath + e.poster_path}
                onClick={() => {
                  navigate(`/Details/${e.id}`);
                }}
                alt="image"
                className="rounded-lg"
              />
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

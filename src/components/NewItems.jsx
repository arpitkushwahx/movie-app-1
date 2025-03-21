import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./carousel/Carousel";

function NewItems() {
  const navigate = useNavigate();
  const { data, imagePath } = useContext(MovieContext);

  return (
    <div>
      <div className="pt-10 pb-24 px-0 sm:px-28 w-auto sm:w-full">
        <div className="text-white flex flex-row justify-between">
          <h1 className="text-sm md:text-3xl xl:text-4xl">
            <span className="font-bold">NEW ITEMS</span> OF THIS SEASON
          </h1>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default NewItems;

import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import { Link } from "react-router-dom";
function ExpectedPremiere() {
  const { data, imagePath } = useContext(MovieContext);

  return (
    <div>
      <div className="px-28 pt-20 ">
        <div className="text-white flex flex-row justify-between">
          <h1 className="text-4xl">Expected Premier</h1>
          
        </div>
        <div className="grid xl:grid-cols-6 grid-cols-1 xs:grid-cols-1 md:grid-cols-3 max-w-full">
          {data.slice(12,18).map((e) => (
            <div className="p-4" key={e.id}>
             <Link to={`/Details/${e.id}`}> <img
                src={imagePath + e.poster_path}
                className="rounded-lg h-80 w-56 hover:opacity-60 duration-200 border-2 border-red-400 hover:shadow-amber-300 shadow-md hover:-translate-y-1 "
                alt="image"
              /></Link>
              <h1 className="text-white"> {e.original_title}</h1>
              <p className="text-amber-300">{e.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpectedPremiere;

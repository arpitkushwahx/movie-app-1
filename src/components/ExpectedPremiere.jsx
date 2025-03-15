import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
function ExpectedPremiere() {
  const { data, imagePath } = useContext(MovieContext);

  return (
    <div>
      <div className="px-28 pt-20">
        <div className="text-white flex flex-row justify-between">
          <h1 className="text-4xl">Expected Premiere</h1>
          <span>L</span>
          <span>R</span>
        </div>
        <div className="grid grid-cols-6">
          {data.slice(0, 6).map((e) => (
            <div className="p-4" key={e.id}>
              <img
                src={imagePath + e.poster_path}
                className="bg-blue-500 h-80 w-56 rounded-lg"
                alt="image"
              />
              <h1 className="text-white"> {e.original_title}</h1>
              <h2 className="text-red-800">{e.release_date}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpectedPremiere;

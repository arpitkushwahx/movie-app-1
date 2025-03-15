import React from "react";
import { Link } from "react-router-dom";

function Movie({ data }) {
  const imagePath = "https://image.tmdb.org/t/p/w1280";
  console.log(data);
  
  return (
    <div>
      <div className="text-white grid grid-cols-6  gap-5">
        {data.slice(0,18).map((e) => (
          <div key={e.id} className=" hover:-translate-y-1 duration-300 rounded-lg border-2 border-red-400 hover:shadow-red-400 shadow-md">
            {/* <p>{e.vote_average}</p> */}
            
            <span className="absolute mt-5 ml-5 h-10 w-10 rounded-full flex justify-center items-center  backdrop-blur-sm text-sm border-2 border-amber-300 z-2 hover:z-2 hover:border-4 bg-transparent/20 hover:border-red-800 duration-300">{Math.round(e.vote_average*10)/10}</span>
            <Link to={`/details/${e.id}`}>
              <img
                src={imagePath + e.poster_path}
                alt="image"
                className="rounded-lg h-80 w-56 hover:opacity-60 duration-200  "
              />
            </Link>
            <h1>{e.title|| e.original_name}</h1>
            {/* <div className="w-12 h-12 opacity-10 place-content-center rounded-full bg-amber-400 text-sm flex justify-center items-center">{e.vote_average}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;

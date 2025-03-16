import React from "react";
import { Link } from "react-router-dom";

function Movie({ data }) {
  const imagePath = "https://image.tmdb.org/t/p/w1280";
  console.log(data);
  
  return (
    <div>
      <div className="text-white grid grid-cols-6  gap-5">
        {data.slice(0,18).map((e) => (
          <div key={e.id} >
            {/* <p>{e.vote_average}</p> */}
            
            <span className="absolute mt-5 ml-5 h-10 w-10 rounded-full flex justify-center items-center  backdrop-blur-sm text-sm border-2 border-amber-300 z-2 hover:z-2 hover:border-4 bg-transparent/20 hover:border-red-800 duration-300">{Math.round(e.vote_average*10)/10}</span>
            <Link to={`/details/${e.id}`}>
              <img
                src={imagePath + e.poster_path}
                alt="image"
                className="rounded-lg h-80 w-56 hover:opacity-60 duration-200 border-2 border-red-400 hover:shadow-amber-300 shadow-md hover:-translate-y-1 "
              />
            </Link>
            <div className="">
            <h1 className="text-white text-xl text-wrap font-medium">{e.title|| e.original_name}</h1>
            <p className="text-yellow-500">{e.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;

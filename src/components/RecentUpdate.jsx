import React, { useEffect } from "react";
import Movie from "./Movie";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContextProvider";

function RecentUpdate() {
  const [movie, setMovie] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [Tv, setTv] = useState([]);
  const { data, trending, tv } = useContext(MovieContext);

  const [single, setSingle] = useState([]);

  console.log(trending);
  useEffect(() => {
    setSingle(data);
  }, [data]);

  // const handleMovie = () => {
  //   setMovie(data);
  //   setTrendingMovie([])
  // };
  // const handleNewMovieItem = () => {
  //   setTrendingMovie(trending);
  //   setMovie([])
  // };
  // const handleTvItem = () => {
  //   setTv(tv);
  //   setMovie([])
  //   setTrendingMovie([])

  // };

  const handleMovie = () => {
    setSingle(data);
  };
  const handleNewMovieItem = () => {
    setSingle(trending);
  };
  const handleTvItem = () => {
    setSingle(tv);
  };

  return (
    <div>
      <div className="border-b-2 border-b-gray-800 px-32 ">
        <div className="text-white">
          <h1 className="text-4xl text-white ">Recently Updated</h1>
          <div className="my-7 flex flex-row gap-7 justify-items-start">
            <button
              onClick={handleMovie}
              className=" hover:text-amber-300 hover:border-b-2 h-10 w-20 hover:border-amber-300 hover:shadow-xs hover:shadow-amber-300 rounded-lg duration-100"
            >
              MOVIES
            </button>

            <button
              onClick={handleNewMovieItem}
              className=" hover:text-amber-300 hover:border-b-2 h-10 w-24 hover:border-amber-300 hover:shadow-xs hover:shadow-amber-300 rounded-lg duration-100"
            >
              NEW ITEMS
            </button>

            <button
              onClick={handleTvItem}
              className=" hover:text-amber-300 hover:border-b-2 h-10 w-24 hover:border-amber-300 hover:shadow-xs hover:shadow-amber-300 rounded-lg duration-100"
            >
              TV SHOWS
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-b-gray-800 py-32 pt-7 px-32">
        {/* 
        <Movie data={movie} />
        <Movie data={trendingMovie} /> */}

        <Movie data={single} />

        {/* <NewMovies data={movie}/> */}
      </div>
    </div>
  );
}

export default RecentUpdate;

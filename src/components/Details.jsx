import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContextProvider";

function Details() {
  const { id } = useParams();
  const { data, trending, tv, API_KEY, imagePath, searchInfo } =
    useContext(MovieContext);
  const [movieKey, setMovieKey] = useState("");
  const [tvKey, setTvKey] = useState("");
  const [movieInfo, setMovieInfo] = useState("");
  const [imageID, setImageID] = useState({});

  console.log("data", data);
  console.log("trending", trending);

  useEffect(() => {
    const selectedMovie = [...data, ...trending, ...tv, ...searchInfo].find(
      (movie) => movie.id === Number(id)
    );
    if (selectedMovie) {
      setImageID(selectedMovie); // Set the selected movie object
    }
  }, []);

  useEffect(() => {
    if (!imageID) return;
    const fetchMovieKey = async (movieID) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("unable to fetch Movie key");
        }
        console.log("movieKeyRes", res);

        const movieKeyInfo = await res.json();
        console.log("movieKeyInfo", movieKeyInfo);
        if (movieKeyInfo.results.length > 0) {
          setMovieKey(movieKeyInfo.results[0].key);
          console.log("movieKeyInfo", movieKeyInfo);
        } else {
          setMovieKey(null);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchMovieKey(imageID.id);
  }, [imageID, API_KEY]);

  useEffect(() => {
    const fetchTvKey = async (movieID) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${movieID}/videos?api_key=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("unable to fetch TV key");
        }
        const tvInfo = await res.json();
        if (tvInfo) {
          setTvKey(tvInfo.results[0].key);
          console.log(tvInfo);
        } else {
          setTvKey("");
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchTvKey(imageID.id);
  }, [imageID]);

  useEffect(() => {
    const fetchMovieInfo = async (movieID) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("unable to fetch movie info");
        }
        const movieInfo = await res.json();
        if (movieInfo) {
          setMovieInfo(movieInfo);
          console.log("movieInfo", movieInfo);
        } else {
          setMovieInfo("");
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchMovieInfo(id);
  }, [imageID]);

  return (
    <div>
      <div
        className="h-auto sm:h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagePath + imageID?.backdrop_path})`,
        }}
      >
        <div className="text-white grid grid-cols-1">
          <div className=" flex flex-col sm:justify-between sm:ml-28 mt-32 sm:mt-48">
            <h1 className="text-4xl font-bold pb-5 px-2 sm:hidden ">
              {imageID.title || imageID.original_name}
            </h1>
            {imageID && imageID.poster_path ? (
              <img
                className="w-screen sm:w-60 h-5xl sm:h-96 px-2 rounded-3xl sm:border-t-1 sm:border-t-black shadow-md shadow-black"
                src={imagePath + imageID.poster_path || noImageIcon} //A "truthy" value means that it's not null, undefined, false, 0, NaN, or an empty string ("").
                alt="image"
              />
            ) : (
              <p>Photo unavailable</p>
            )}
            <div className="px-5 py-5 mx-2 mt-4  sm:px-5 sm:ml-10 w-auto h-auto rounded-2xl shadow-md shadow-black bg-black opacity-50">
              <h1 className="text-4xl font-bold hidden sm:block md:block ">
                {imageID.title || imageID.original_name}
              </h1>
              {movieInfo && (
                <h2 className="font-medium text-xl">{movieInfo.tagline}</h2>
              )}
              {imageID && (
                <>
                  <p>
                    <span>Runtime: </span>
                    {movieInfo.runtime} min
                  </p>
                  <p>Release Date: {imageID.release_date}</p>

                  {movieInfo && (
                    <>
                      <p>
                        Budget: <span>{movieInfo.budget}</span>$
                      </p>
                      <p>
                        Language:{" "}
                        {!movieInfo.spoken_languages.length > 0
                          ? "English"
                          : movieInfo.spoken_languages[0].english_name}
                      </p>
                      <p>
                        Country:{" "}
                        {!movieInfo.production_countries.length > 0
                          ? ""
                          : movieInfo.production_countries[0].name}
                      </p>
                      <p>
                        Genre:{" "}
                        {!movieInfo.genres.length > 0
                          ? ""
                          : movieInfo.genres[0].name}
                      </p>
                    </>
                  )}

                  <h1 className="text-4xl font-bold ">OVERVIEW</h1>
                  <p className="text-auto mt-5 ">{imageID.overview}</p>
                </>
              )}
            </div>
          </div>
          <div className=" sm:ml-36 sm:mt-48  ">
            {(movieKey && !movieKey.match(/^[0-9]+$/)) || tvKey ? (
              <>
                <iframe
                  className="rounded-lg border-2  border-amber-300 sm:hidden md:hidden my-5 mx-auto   "
                  width="300"
                  height="250"
                  src={`https://www.youtube.com/embed/${movieKey || tvKey}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="rounded-lg border-2 border-amber-300 hidden sm:block md:block   "
                  width="560"
                  height="350"
                  src={`https://www.youtube.com/embed/${movieKey || tvKey}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </>
            ) : (
              <>
                {" "}
                <iframe
                  className="rounded-lg border-2  border-amber-300 sm:hidden md:hidden my-5 mx-auto"
                  width="300"
                  height="250"
                  src="https://www.youtube.com/embed/CevxZvSJLk8?list=RDCevxZvSJLk8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="rounded-lg border-2 border-amber-300 hidden sm:block md:block   "
                  width="560"
                  height="350"
                  src="https://www.youtube.com/embed/CevxZvSJLk8?list=RDCevxZvSJLk8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

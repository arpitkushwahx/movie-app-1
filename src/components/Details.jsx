import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContextProvider";

function Details() {
  const { id } = useParams();
  const { data, trending, tv, API_KEY, imagePath, searchInfo, noImageIcon } =
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
    setImageID(selectedMovie); // Set the selected movie object
  }, [id, data, trending, tv, searchInfo]);

  useEffect(() => {
    const fetchMovieKey = async (movieID) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`
          //https://api.themoviedb.org/3//tv/:series_id/videos?language=en-US
        );

        if (!res) {
          throw new Error("unable to fetch trendinng movie");
        }
        const trendingInfo = await res.json();
        if (trendingInfo) {
          setMovieKey(trendingInfo.results[0].key);
          console.log(trendingInfo);
        } else {
          setMovieKey("");
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchMovieKey(imageID.id);
  }, [imageID]);

  useEffect(() => {
    const fetchTvKey = async (movieID) => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${movieID}/videos?api_key=${API_KEY}`
          //https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}
        );

        if (!res) {
          throw new Error("unable to fetch trendinng movie");
        }
        const trendingInfo = await res.json();
        if (trendingInfo) {
          setTvKey(trendingInfo.results[0].key);
          console.log(trendingInfo);
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

        if (!res) {
          throw new Error("unable to fetch trendinng movie");
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
  }, []);

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagePath + imageID?.backdrop_path})`,
        }}
      >
        <div className="text-white grid grid-cols-2">
          <div className=" flex justify-between ml-28 mt-48">
            {imageID && imageID.poster_path ? (
              <img
                className="w-60 h-96 rounded-lg border-t-1 border-t-black shadow-md shadow-black"
                src={imagePath + imageID.poster_path || noImageIcon} //A "truthy" value means that it's not null, undefined, false, 0, NaN, or an empty string ("").
                alt="image"
              />
            ) : (
              <p>Loading...</p>
            )}
            <div className="px-5 ml-10 w-auto h-auto rounded-xl shadow-md shadow-black">
              <h1 className="text-4xl font-bold ">
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
                  <p>Release Data: {imageID.release_date}</p>

                  {movieInfo && (
                    <>
                      <p>
                        Budget: <span>{movieInfo.budget}</span>$
                      </p>
                      <p>
                        Language:{" "}
                        {movieInfo.spoken_languages.length === 0
                          ? "english"
                          : movieInfo.spoken_languages[0].english_name}
                      </p>
                      <p>
                        Country:{" "}
                        {movieInfo.production_countries.length === 0
                          ? ""
                          : movieInfo.production_countries[0].name}
                      </p>
                      <p>
                        Genre:{" "}
                        {movieInfo.genres.length === 0
                          ? ""
                          : movieInfo.genres[0].name}
                        ,{" "}
                        {/* {movieInfo.genres.length === 0
                          ? ""
                          : movieInfo.genres[1].name} */}
                      </p>
                    </>
                  )}

                  <h1 className="text-4xl font-bold ">OVERVIEW</h1>
                  <p className="text-auto mt-5 ">{imageID.overview}</p>
                </>
              )}
            </div>
          </div>
          <div className="ml-36">
            <iframe
              className="rounded-lg border-2 border-amber-300 mt-48 "
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movieKey || tvKey}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

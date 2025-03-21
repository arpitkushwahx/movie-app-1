import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [trending, setTrending] = useState([]);
  const [tv, setTv] = useState([]);
  const [query, setQuery] = useState("");

  const [searchInfo, setSearchInfo] = useState([])

  const API_KEY = "01cc0c43de395e0bd358bd4a24e76900";
  const imagePath = "https://image.tmdb.org/t/p/w1280";
  const noImageIcon = "no image icon.jpg"
  useEffect(() => {
    const fetchData = async (movieID) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        console.log(response);

        if (!response.ok) {
          throw new Error("no response from server");
        }
        const info = await response.json();

        setData(info.results);
        console.log(info);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        console.log(res);

        if (!res) {
          throw new Error("unable to fetch trendinng movie");
        }
        const trendingInfo = await res.json();
        setTrending(trendingInfo.results);
        console.log(trendingInfo.results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const res = await fetch(
          ` https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
        );
        console.log(res);

        if (!res) {
          throw new Error("unable to fetch trendinng movie");
        }
        const trendingInfo = await res.json();
        setTv(trendingInfo.results);
        console.log(trendingInfo.results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchTv();
  }, []);

  useEffect(() => {
    const fetchSearch = async (search_query) => {
      try {
        const res = await fetch(
          ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_query}&page=1`
        );
        console.log(res);

        if (!res.ok) {
          throw new Error("unable to fetch trendinng movie");
        }
        const info = await res.json();
        setSearchInfo(info.results);
        console.log("searchinfo", info);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchSearch(query);
  }, [query]);

  return (
    <MovieContext.Provider
      value={{ data, error, trending, tv, API_KEY, imagePath, query, setQuery,searchInfo, noImageIcon }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

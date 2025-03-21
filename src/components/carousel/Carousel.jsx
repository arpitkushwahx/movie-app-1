import React from "react";
import { MovieContext } from "../../context/MovieContextProvider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const { data, imagePath, trending, tv } = useContext(MovieContext);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);
  const [fourth, setFourth] = useState(3);
  const [fifth, setFifth] = useState(4);

    const arr = [...tv, ...data, ...trending];
  
  //   OR
  //   let arr = [...tv, ...data, ...trending].map((e) => e.poster_path);

  if (arr.length === 0) {
    return <div>Loading...</div>;
  }

  const path = arr.map((e) => e.poster_path);
  console.log("arr", arr);

  console.log("path", path);
  console.log("carousel", arr);

  const handleClick = () => {
    // first >= arr.length - 1 ? setFirst(0) : setFirst(first + 1);
    // second >= arr.length - 1 ? setSecond(0) : setSecond(second + 1);
    // third >= arr.length - 1 ? setThird(0) : setThird(third + 1);

    setFirst((prev) => (prev + 1) % arr.length);
    setSecond((prev) => (prev + 1) % arr.length);
    setThird((prev) => (prev + 1) % arr.length);
    setFourth((prev) => (prev + 1) % arr.length);
    setFifth((prev) => (prev + 1) % arr.length);
  };

  return (
    <div>
      <div className="w-auto text-white">
        <div className="flex justify-end mr-10 pb-5">
          <button onClick={handleClick}>
            <i className="fa-solid fa-arrow-right fa-2xl cursor-pointer hover:text-red-800 duration-200"></i>
          </button>
        </div>
        <div className="duration-300 rounded-2xl grid grid-cols-5 sm:w-auto ">
          <div className="w-auto p-2  text-white">
            <Link to={`/details/${arr[first].id}`}>
              {" "}
              <img
                src={imagePath + path[first]}
                alt=""
                className="rounded-2xl h-64 w-60 hover:opacity-60 duration-200 border-4 opacity-35 border-amber-300 hover:shadow-amber-300 shadow-md hover:-translate-y-1 hover:border-none "
              />
              
            </Link>
            {/* <p>{arr[first].original_title || arr[first].original_name}</p> */}
          
          </div>
          <div className="w-auto p-2 ">
            <Link to={`/details/${arr[second].id}`}>
              {" "}
              <img
                src={imagePath + path[second]}
                alt=""
                className="rounded-2xl h-80 w-60 hover:opacity-60 duration-200 border-4 opacity-35 border-amber-300 hover:shadow-amber-300 shadow-md hover:-translate-y-1 hover:border-none "
              />
            </Link>
            {/* <p>{arr[second].original_title || arr[second].original_name}</p> */}
            
          </div>
          <div className="w-auto p-2 ">
            <Link to={`/details/${arr[third].id}`}>
              {" "}
              <img
                src={imagePath + path[third]}
                alt=""
                className="rounded-2xl h-96 w-2xl hover:opacity-60 duration-200 border-4 border-amber-300 hover:shadow-amber-300 shadow-md hover:-translate-y-1 hover:border-none "
              />
            </Link>
            {/* <p>{arr[third].original_title || arr[third].original_name}</p> */}
          
          </div>
          <div className="w-auto p-2 ">
            <Link to={`/details/${arr[fourth].id}`}>
              {" "}
              <img
                src={imagePath + path[fourth]}
                alt=""
                className="rounded-2xl h-80 w-60 hover:opacity-60 duration-200 border-4 opacity-35 border-amber-300 hover:shadow-amber-300 shadow-md hover:-translate-y-1 hover:border-none "
              />
            </Link>
            {/* <p>{arr[fourth].original_title || arr[fourth].original_name}</p> */}
            
          </div>
          <div className="w-auto p-2 ">
            <Link to={`/details/${arr[fifth].id}`}>
              {" "}
              <img
                src={imagePath + path[fifth]}
                alt=""
                 className="rounded-2xl h-64 w-60 hover:opacity-60 duration-200 border-4 opacity-35 border-amber-300 hover:shadow-amber-300 shadow-md hover:-translate-y-1 hover:border-none "
              />
            </Link>
            {/* <p>{arr[fifth].original_title || arr[fifth].original_name}</p> */}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContextProvider";

function Slider() {
  const { data, imagePath } = useContext(MovieContext);
  const [poster, setPoster] = useState("");
  const [count, setCount] = useState(0);

  const arr = data.slice(0, 19).map((e) => e.poster_path);
  console.log("array of 5 images from api", arr);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoster((prevPoster) => {
        const nextPoster = arr[count];
        return nextPoster;
      });
      setCount((prevCount) => (prevCount + 1) % arr.length);
      console.log(poster);
    }, 4000);
    return () => clearInterval(interval);
  }, [count, arr]);

  return (
    <div>
      <div className="text-white">
        {/* <button onClick={handleClick}>next</button> */}
        <img
          src={imagePath + poster}
          alt="image"
          className="h-3/5 max-h-screen w-screen px-28  object-cover opacity-50 duration-200"
        />
      </div>
    </div>
  );
}

export default Slider;

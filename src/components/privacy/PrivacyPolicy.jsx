import React from "react";
import { MovieContext } from "../../context/MovieContextProvider";
import { useContext, useState } from "react";
import Demo from "../demo/Demo";

function PrivacyPolicy() {
  const { data, imagePath } = useContext(MovieContext);
  const [poster, setPoster] = useState("");
  const [count, setCount] = useState(0);

  // const arr = data.slice(5, 11).map((e) => e.poster_path);
  // console.log("array of 5 images from api", arr);

  // const handleChange = () => {
  //   setPoster(arr[count]);
  //   setCount((prev) => (prev + 1 ) % arr.length);
  // };

  return (
    <div>
      <div className="h-auto text-white">
        <div className=" w-full h-56 flex items-center  text-white text-4xl border-b-2 border-b-gray-800">
          <h1 className="mt-20 ml-5 sm:ml-32 text-nowrap">Privacy Policy</h1>
        </div>
        <div className="px-2 py-2 sm:p-20">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <br />
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose .
          </p>
          <br />
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>

        {/* <div>
          <h1>slider</h1>
          <button
            onClick={handleChange}
            className="ml-56 rounded-lg hover:border-b-2 hover:border-b-amber-300 w-20 h-10 hover:shadow-sm hover:shadow-amber-300"
          >
            next
          </button>
          <img src={imagePath + poster} alt="image" className="h-50 w-50" />
        </div> */}
        <Demo/>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

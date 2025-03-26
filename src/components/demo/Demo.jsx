import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContextProvider";

function Demo() {
  //   const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  //   const [status, setStatus] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData({ ...data, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!data.firstName && !data.lastName && !data.email)
  //       return setStatus("please fill the form properly");

  //     setStatus("Loading...");
  //     const interval = setInterval(() => {
  //       console.log("form submitted");
  //       setStatus("form submitted");
  //       return clearInterval(interval);
  //     }, 2000);

  //     console.log(data);
  //   };




//   const [Count, setCount] = useState(0);
//   const { data, imagePath } = useContext(MovieContext);
//   const [Increment, setIncrement] = useState({ start: 0, end: 3 });
//   const path = data.map((e) => e.poster_path);
//   console.log(data);

//   const handleNext = () => {
//     setCount((prev) => (prev + 1) % data.length);

//     setIncrement((prev) => ({
//       start: (prev.start + 1) % data.length,
//       end: (prev.end + 1) % data.length,
//     }));
//   };
//   const handlePrev = () => {
//     setIncrement((prev) => ({
//       start: (prev.start - 1) % data.length,
//       end: (prev.end - 1) % data.length,
//     }));
//   };

  return (
    <div>
      {/* Form */}
      <div>
        {" "}
        {/* <form onSubmit={handleSubmit}>
        <div>{status}</div>
        <label htmlFor="#">first name</label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />

        <label htmlFor="#">last name</label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />

        <label htmlFor="#">email name</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <button>submit</button>
      </form> */}
      </div>

      {/* carousel */}
      <div className="grid grid-cols-3">
        {/* {path.map((item, index) => {
          if (index >= Increment.start && index < Increment.end) {
            return (
              <div key={index}>
                <img src={imagePath + item} alt="" className="h-50 w-50" />
              </div>
            );
          }
          return null;
        })}
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>next</button> */}
      </div>
    </div>
  );
}

export default Demo;
